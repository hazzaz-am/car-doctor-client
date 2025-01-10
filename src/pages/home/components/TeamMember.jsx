import PropTypes from "prop-types";
import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaXTwitter,
} from "react-icons/fa6";

export const TeamMember = ({img}) => {
	return (
		<div className="border-2 rounded-lg p-6 flex flex-col justify-between">
			<div>
				<img src={img} alt="" className="rounded-lg" />
			</div>
			<div className="space-y-[10px] mt-5">
				<h4 className="font-bold text-xl lg:text-2xl text-dark2 text-center">
					Car Engine Plug
				</h4>
				<h5 className="font-semibold text-lg lg:text-xl text-dark3 text-center">
					Engine Expert
				</h5>
				<div className="text-center space-x-3">
					<a
						href="https://facebook.com"
						target="_blank"
						className="inline-block bg-[#395185] p-4 rounded-full"
					>
						<FaFacebookF className="text-white" />
					</a>
					<a
						href="https://x.com"
						target="_blank"
						className="inline-block bg-black p-4 rounded-full"
					>
						<FaXTwitter className="text-white" />
					</a>
					<a
						href="https://instagram.com"
						target="_blank"
						className="inline-block bg-[#D8447A] p-4 rounded-full"
					>
						<FaInstagram className="text-white text-lg" />
					</a>
					<a
						href="https://linkedin.com"
						target="_blank"
						className="inline-block bg-[#0A66C2] p-4 rounded-full"
					>
						<FaLinkedinIn className="text-white text-lg" />
					</a>
				</div>
			</div>
		</div>
	);
};

TeamMember.propTypes = {
  img: PropTypes.string
}