import PropTypes from "prop-types";

const customVariant = {
	primary: "text-white bg-primary border-primary rounded-md",
	outline1: "text-primary bg-transparent border-primary rounded-md",
	outline2: "text-white bg-transparent border-white rounded-md",
};

const customSize = {
	lg: "w-full",
};

export const Button = ({ variant, size, children }) => {
	const userVariant = customVariant[variant];
	const userSize = customSize[size];
	return (
		<button className={`md:text-[18px] font-semibold text-sm border-2 py-3 px-4 md:py-4 md:px-7 ${userVariant} ${userSize}`}>
			{children}
		</button>
	);
};

Button.propTypes = {
	variant: PropTypes.string.isRequired,
	size: PropTypes.string,
	children: PropTypes.string.isRequired,
};
