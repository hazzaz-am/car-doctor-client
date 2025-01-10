import { Route, Routes } from "react-router";
import { HomePage } from "./pages/home/HomePage";
import { LoginPage } from "./pages/auth/LoginPage";
import { SignupPage } from "./pages/auth/SignupPage";
import { ServicesPage } from "./pages/service/ServicesPage";
import { PrivateRoutes } from "./routes/PrivateRoutes";


export const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route
					path="/"
					element={
						<PrivateRoutes>
							<ServicesPage />
						</PrivateRoutes>
					}
				/>
				<Route path="/signup" element={<SignupPage />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</>
	);
};
