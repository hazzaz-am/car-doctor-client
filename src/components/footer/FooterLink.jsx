import PropTypes from "prop-types";

export const FooterLink = ({ title }) => {
	return <li className="text-base text-[#F3F3F3]">{title}</li>;
};

FooterLink.propTypes = {
	title: PropTypes.string.isRequired,
};
