import PropTypes from "prop-types";
import { SingleFacility } from "./SingleFacility";

export const ServiceFacility = ({ facility }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
			{facility?.map((item) => (
				<SingleFacility key={item.name} item={item} />
			))}
		</div>
	);
};

ServiceFacility.propTypes = {
	facility: PropTypes.array,
};
