import PropTypes from "prop-types";
import { NavigationLink } from "./NavigationLink";

export const SideNav = ({ routes, isSidebarOpen }) => {
	return (
		<aside
			className={`md:hidden ${
				isSidebarOpen
					? "absolute translate-x-0 transition-all duration-1000"
					: "hidden -translate-x-28 transition-all duration-1000"
			} top-0 left-0 px-8 py-16 w-56 h-screen bg-dark1`}
		>
			<menu className="flex flex-col gap-10 md:hidden">
				{routes.map((route) => (
					<NavigationLink
						key={route.page}
						path={route.path}
						page={route.page}
					/>
				))}
			</menu>
		</aside>
	);
};

SideNav.propTypes = {
	routes: PropTypes.array.isRequired,
	isSidebarOpen: PropTypes.bool.isRequired,
};
