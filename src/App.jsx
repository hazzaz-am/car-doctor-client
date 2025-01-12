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
import { OrdersPage } from "./pages/orders/OrdersPage";

export const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/services" element={<ServicesPage />} />
				<Route
					path="/add-new-service"
					element={
						<PrivateRoutes>
							<AddNewService />
						</PrivateRoutes>
					}
				/>
				<Route
					path="/orders"
					element={
						<PrivateRoutes>
							<OrdersPage />
						</PrivateRoutes>
					}
				/>
				<Route path="/services/:serviceId" element={<ServiceDetails />} />
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
