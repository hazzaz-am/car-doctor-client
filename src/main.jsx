import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";
import { Layout } from "./layout/Layout";

createRoot(document.getElementById("root")).render(
	<AuthProvider>
		<BrowserRouter>
			<Layout />
		</BrowserRouter>
		<Toaster />
	</AuthProvider>
);
