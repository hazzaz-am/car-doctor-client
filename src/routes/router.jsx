import { createBrowserRouter } from "react-router";
import { Layout } from "../layout/Layout";
import { HomePage } from "../pages/home/HomePage";
import { LoginPage } from "../pages/auth/LoginPage";
import { SignupPage } from "../pages/auth/SignupPage";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: Layout,
		children: [
			{
				path: "/",
				Component: HomePage,
			},
			{
				path: "/login",
				Component: LoginPage,
			},
			{
				path: "/signup",
				Component: SignupPage,
			},
		],
	},
]);
