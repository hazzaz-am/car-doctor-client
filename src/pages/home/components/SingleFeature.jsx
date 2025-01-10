import PropTypes from "prop-types";

export const SingleFeature = ({ img, title, color = "dark2", bg = "transparent" }) => {
	return (
		<div className={`px-2 py-8 text-center border rounded-lg bg-${bg}`}>
			<img src={img} alt="" className="mx-auto" />
			<h6 className={`text-${color} font-bold text-sm xl:text-lg mt-4`}>
				{title}
			</h6>
		</div>
	);
};

SingleFeature.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
  bg: PropTypes.string,
  color: PropTypes.string,
};
