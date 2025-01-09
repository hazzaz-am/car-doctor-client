import PropTypes from "prop-types"
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";

export const ServiceItem = ({service}) => {
  return (
		<div
			className="border-2 border-dark6 p-6 flex flex-col justify-between gap-5 rounded-lg"
		>
			<div>
				<img
					src={service.img}
					alt=""
					className="rounded-lg w-full h-[205px] object-cover"
				/>
			</div>
			<div className="space-y-5">
				<h4 className="font-bold text-dark2 lg:text-2xl">{service.title}</h4>
				<div className="flex items-center justify-between">
					<h5 className="font-semibold lg:text-xl text-primary">
						Price: ${service.price}
					</h5>
					<Link
						to={`/service/${service._id}`}
						className="text-primary lg:text-xl"
					>
						<FaArrowRight />
					</Link>
				</div>
			</div>
		</div>
	);
}

ServiceItem.propTypes = {
  service: PropTypes.object.isRequired
}