import PropTypes from "prop-types";

export const Input = ({type="text", name, placeholder, value}) => {
  return (
		<input
			type={type}
			name={name}
			id={name}
			placeholder={placeholder}
			defaultValue={value}
			className="w-full py-2 px-3 lg:py-4 lg:px-6 rounded-lg text-sm lg:text-base text-dark4 leading-[30px]"
		/>
	);
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
}