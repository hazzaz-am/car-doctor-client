import PropTypes from "prop-types"
import { NavLink } from "react-router"

export const NavigationLink = ({path, page}) => {
  return (
		<NavLink
			to={path}
			className={({ isActive }) =>
				isActive
					? "text-primary font-semibold md:text-[14px] lg:text-[18px]"
					: "font-semibold md:text-[14px] lg:text-[18px] text-white md:text-dark2"
			}
		>
			{page}
		</NavLink>
	);
}

NavigationLink.propTypes = {
  path: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
}