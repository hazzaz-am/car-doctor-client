import PropTypes from "prop-types";

export const SectionHeading = ({ children, align = "left" }) => {
	return (
		<h2 className={`text-dark1 font-bold text-3xl leading-normal lg:text-[45px] text-${align}`}>
			{children}
		</h2>
	);
};

SectionHeading.propTypes = {
	children: PropTypes.string.isRequired,
	align: PropTypes.string.isRequired,
};