import PropTypes from "prop-types";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router";

export const SingleCategory = ({ title, activeCategory, id }) => {
	const active = title === activeCategory;
	return (
		<div className={`${active ? "bg-primary" : "bg-white"} rounded-lg`}>
			<Link
				to={`/services/${id}`}
				className="flex items-center justify-between px-2 py-2 md:px-4 md:py-5"
			>
				<p
					className={`${
						active ? "text-white" : "text-dark1"
					} text-xs md:text-[16px] font-semibold`}
				>
					{title}
				</p>
				<FaLongArrowAltRight
					className={`${active ? "text-white" : "text-primary"} text-sm md:text-xl`}
				/>
			</Link>
		</div>
	);
};

SingleCategory.propTypes = {
	title: PropTypes.string,
	activeCategory: PropTypes.string,
	id: PropTypes.string,
};
