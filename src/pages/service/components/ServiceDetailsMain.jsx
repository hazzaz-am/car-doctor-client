import PropTypes from "prop-types";
import { Paragraph } from "../../../components/Paragraph";
import { ServiceFacility } from "./ServiceFacility";
import { ServiceSteps } from "./ServiceSteps";
import { Link } from "react-router";
import youtubeVideo from '../../../assets/service-page/youtube-video.png'

export const ServiceDetailsMain = ({service}) => {

  return (
		<div className="w-2/3">
			<div>
				<img src={service?.img} alt="" className="w-full rounded-lg" />
			</div>
			<div className="mt-12">
				<h2 className="text-dark1 font-bold text-4xl mb-8">{service?.title}</h2>
				<Paragraph>{service?.description}</Paragraph>
			</div>
			{/* facility */}
			<ServiceFacility facility={service?.facility} />
			<Paragraph>{service?.description}</Paragraph>

			{/* common for all service */}
			<div className="mt-12 mb-8">
				<h2 className="text-dark1 font-bold text-4xl mb-8">{service?.title}</h2>
				<Paragraph>{service?.description}</Paragraph>
			</div>

			<ServiceSteps />

			<Link to="https://tinyurl.com/5454bh6u" target="_blank">
				<img src={youtubeVideo} alt="" className="w-full" />
			</Link>
		</div>
	);
}

ServiceDetailsMain.propTypes = {
  service: PropTypes.object
}