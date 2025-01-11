import { Route, Routes } from "react-router";
import { HomePage } from "./pages/home/HomePage";
import { LoginPage } from "./pages/auth/LoginPage";
import { SignupPage } from "./pages/auth/SignupPage";
import { ServicesPage } from "./pages/service/ServicesPage";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import { ErrorPage } from "./pages/error/ErrorPage";
import { ServiceDetails } from "./pages/service/ServiceDetails";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { AddNewService } from "./pages/service/AddNewService";

export const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route
					path="/services"
					element={
						<PrivateRoutes>
							<ServicesPage />
						</PrivateRoutes>
					}
				/>
				<Route
					path="/add-new-service"
					element={
						<PrivateRoutes>
							<AddNewService />
						</PrivateRoutes>
					}
				/>
				<Route
					path="/services/:serviceId"
					element={
						<PrivateRoutes>
							<ServiceDetails />
						</PrivateRoutes>
					}
				/>
				<Route path="/signup" element={<SignupPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route
					path="/checkout/:checkoutId"
					element={
						<PrivateRoutes>
							<CheckoutPage />
						</PrivateRoutes>
					}
				/>
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</>
	);
};
