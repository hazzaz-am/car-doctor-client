import PropTypes from "prop-types";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";
import { SignupPage } from "../pages/auth/SignupPage";

export const PrivateRoutes = ({ children }) => {
	const { user, loading } = useAuth();

	if (loading) {
		return <p>Loading</p>;
	}

	if (user) {
		return children;
	}

	return <Navigate to="/signup" replace={<SignupPage />} />;
};

PrivateRoutes.propTypes = {
	children: PropTypes.element,
};
