import PropTypes from "prop-types";
import { Paragraph } from "../../../components/Paragraph";

export const SingleFacility = ({item}) => {
	return (
		<div className="px-4 py-4 md:px-10 md:py-9 bg-dark7 border-t-2 border-primary rounded-lg">
			<h4 className="text-dark2 font-bold md:text-xl mb-4">{item.name}</h4>
			<Paragraph>{item.details}</Paragraph>
		</div>
	);
};


SingleFacility.propTypes = {
	item: PropTypes.object,
};