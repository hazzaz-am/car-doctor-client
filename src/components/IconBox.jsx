import PropTypes from "prop-types";


export const IconBox = ({ icon, title, subTitle }) => {
	return (
		<div className="flex flex-col lg:flex-row items-center gap-5">
			<img src={icon} alt="" />
			<div className="space-y-[10px] text-center lg:text-left">
				<h4 className="font-medium text-sm lg:text-base text-white">{title}</h4>
				<h3 className="font-bold text-xl lg:text-2xl text-white">{subTitle}</h3>
			</div>
		</div>
	);
};

IconBox.propTypes = {
	icon: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
};