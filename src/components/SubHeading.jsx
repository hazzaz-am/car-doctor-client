import PropTypes from "prop-types";

export const SubHeading = ({ children, align = "left" }) => {
	return (
		<h4 className={`text-primary font-bold lg:text-xl text-${align}`}>
			{children}
		</h4>
	);
};

SubHeading.propTypes = {
	children: PropTypes.string.isRequired,
	align: PropTypes.string.isRequired,
};
