import { Link } from "react-router";
import logo from "../../assets/logo/logo.svg";
import { NavigationLink } from "./NavigationLink";
import { FaOpencart } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Button } from "../Button";
import { FaAlignLeft } from "react-icons/fa6";
import { useState } from "react";
import { SideNav } from "./SideNav";

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

export const Navbar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<nav className="relative max-w-[1140px] mx-auto flex items-center justify-between gap-4 py-12 px-5 xl:px-0">
			<div>
				{/* logo */}
				<FaAlignLeft onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="inline-block md:hidden text-3xl md:text-xl" />
				<Link to="/" className="hidden md:inline-block text-3xl md:text-xl">
					<img className="w-20 md:w-24" src={logo} alt="" />
				</Link>
			</div>

			{/* nav items */}
			<SideNav routes={routes} isSidebarOpen={isSidebarOpen}/>
			<menu className="hidden md:flex items-center gap-10 ">
				{routes.map((route) => (
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
				<Button variant="outline1">Appointment</Button>
			</div>
		</nav>
	);
};
