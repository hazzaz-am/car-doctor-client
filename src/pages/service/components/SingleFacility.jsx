import PropTypes from "prop-types";
import { Paragraph } from "../../../components/Paragraph";

export const SingleFacility = ({item}) => {
	return (
		<div className="px-10 py-9 bg-dark7 border-t-2 border-primary rounded-lg">
			<h4 className="text-dark2 font-bold text-xl mb-4">{item.name}</h4>
			<Paragraph>{item.details}</Paragraph>
		</div>
	);
};


SingleFacility.propTypes = {
	item: PropTypes.object,
};