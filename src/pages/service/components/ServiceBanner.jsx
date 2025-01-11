import PropTypes from "prop-types";
import { Link } from "react-router";

export const ServiceBanner = ({ image, pathName, path }) => {
	return (
		<div
			style={{
				backgroundImage: `url(${image})`,
			}}
			className="bg-cover bg-center object-cover rounded-lg mb-32"
		>
			<div className="bg-black/50 py-20 px-6 md:py-24 md:px-12 lg:py-32 lg:px-24 rounded-lg relative">
				<h2 className="text-white font-bold text-xl md:text-3xl lg:text-[45px]">
					Service Details
				</h2>
				<div className="bg-primary text-center absolute bottom-0  px-4 py-3 text-white rounded-sm font-medium text-sm lg:text-xl">
					<Link to="/">Home</Link> /{" "}
					<Link to={`${path}`} className="capitalize">
						{pathName}
					</Link>
				</div>
			</div>
		</div>
	);
};

ServiceBanner.propTypes = {
	image: PropTypes.string,
	pathName: PropTypes.string,
	path: PropTypes.string,
};