import { Link } from "react-router";
import logo from "../../assets/logo/logo.svg";
import { NavigationLink } from "./NavigationLink";
import { FaOpencart } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Button } from "../Button";
import { FaAlignLeft } from "react-icons/fa6";
import { useState } from "react";
import { SideNav } from "./SideNav";
import { useAuth } from "../../hooks/useAuth";
import toast from "react-hot-toast";

// all paths
const routes = [
	{
		path: "/",
		page: "Home",
	},
	{
		path: "/about",
		page: "About",
	},
	{
		path: "/services",
		page: "Services",
	},
	{
		path: "/blog",
		page: "Blog",
	},
	{
		path: "/contact",
		page: "Contact",
	},
];

const authRoutes = [
	{
		path: "/",
		page: "Home",
	},
	{
		path: "/services",
		page: "Services",
	},
	{
		path: "/add-new-service",
		page: "Add Service",
	},
	{
		path: "/orders",
		page: "Orders",
	},
];

export const Navbar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { user, logoutUser } = useAuth();

	const handleSignOutUser = () => {
		logoutUser()
			.then(() => {
				toast.success("Logout Successfully");
			})
			.catch(() => {
				toast.error("Something went wrong");
			});
	};

	return (
		<nav className="relative max-w-[1140px] mx-auto flex items-center justify-between gap-4 py-12 px-5 xl:px-0">
			<div>
				{/* logo */}
				<FaAlignLeft
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
					className="inline-block md:hidden text-3xl md:text-xl"
				/>
				<Link to="/" className="hidden md:inline-block text-3xl md:text-xl">
					<img className="w-20 md:w-24" src={logo} alt="" />
				</Link>
			</div>

			{/* nav items */}
			<SideNav routes={routes} isSidebarOpen={isSidebarOpen} />
			<menu className="hidden md:flex items-center gap-10 ">
				{!user &&
					routes.map((route) => (
						<NavigationLink
							key={route.page}
							path={route.path}
							page={route.page}
						/>
					))}

				{user &&
					authRoutes.map((route) => (
						<NavigationLink
							key={route.page}
							path={route.path}
							page={route.page}
						/>
					))}
			</menu>

			{/* cart */}
			<div className="flex items-center gap-7">
				<div className="flex items-center gap-5">
					<FaOpencart className="cursor-pointer text-3xl md:text-xl" />
					<FaMagnifyingGlass className="cursor-pointer text-3xl md:text-xl" />
				</div>
				{user?.email ? (
					<>
						<p
							onClick={() => setIsModalOpen(!isModalOpen)}
							className="p-3 border-2 border-primary rounded-full font-semibold md:text-[14px] lg:text-[18px] text-dark2 cursor-pointer"
						>
							{user?.email.slice(0, 2).toUpperCase()}
						</p>
						{isModalOpen && (
							<div className="absolute top-28 md:top-32 right-2 md:right-2 lg:right-2 rounded-lg bg-dark6">
								<button
									onClick={handleSignOutUser}
									className="hover:bg-primary px-8 py-4 rounded-lg duration-500 transition-colors hover:text-white select-none"
								>
									Logout
								</button>
							</div>
						)}
					</>
				) : (
					<Link to="/signup">
						<Button variant="outline1">Appointment</Button>
					</Link>
				)}
			</div>
		</nav>
	);
};
