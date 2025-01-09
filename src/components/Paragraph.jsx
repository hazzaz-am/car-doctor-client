import PropTypes from "prop-types";

export const Paragraph = ({ children, align = "left" }) => {
	return (
		<p className={`text-sm lg:text-base text-dark3 text-${align}`}>
			{children}
		</p>
	);
};

Paragraph.propTypes = {
	children: PropTypes.string.isRequired,
	align: PropTypes.string.isRequired,
};
