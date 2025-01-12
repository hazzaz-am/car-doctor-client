import PropTypes from "prop-types";

export const Paragraph = ({ children, align = "left" }) => {
	return (
		<p className={`text-sm lg:text-[16px] leading-[30px] text-dark3 capitalize text-${align}`}>
			{children}
		</p>
	);
};

Paragraph.propTypes = {
	children: PropTypes.string,
	align: PropTypes.string,
};
