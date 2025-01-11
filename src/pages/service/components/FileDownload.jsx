import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { Link } from "react-router";

export const FileDownload = ({title}) => {
	return (
		<div className="flex items-center justify-between">
			<div className="flex items-center gap-4">
				<FaFileAlt className="text-xl text-white"/>
				<div>
					<h4 className="text-lg font-semibold text-white">{title}</h4>
					<Link to="/car-shop-details.pdf" target="_blank" className="text-dark4 text-[16px]" download>Download</Link>
				</div>
			</div>
			<FaArrowRight className="text-xl text-white"/>
		</div>
	);
};

FileDownload.propTypes = {
  title: PropTypes.string
}