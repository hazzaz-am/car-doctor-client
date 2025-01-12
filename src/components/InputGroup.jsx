import PropTypes from "prop-types";

export const InputGroup = ({ name, labelTitle, type = "text", placeholder }) => {
	return (
		<div className="flex flex-col gap-6">
			<label className="text-dark2 font-semibold text-lg" htmlFor={name}>
				{labelTitle}
			</label>
			<input
				type={type}
				name={name}
				id={name}
				placeholder={placeholder}
				className="border text-dark3 rounded-md px-6 py-3 text-base"
				autoComplete="off"
			/>
		</div>
	);
};

InputGroup.propTypes = {
	name: PropTypes.string,
	labelTitle: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
};