import PropTypes from "prop-types";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";
import { Spinner } from "../components/Spinner";

export const PrivateRoutes = ({ children }) => {
	const { user, loading } = useAuth();

	if (loading) {
		return <Spinner />;
	}

	if (user) {
		return children;
	}

	return <Navigate to="/signup" />;
};

PrivateRoutes.propTypes = {
	children: PropTypes.element,
};
