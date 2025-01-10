import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { App } from "../App";

export const Layout = () => {
	return (
		<>
			<Navbar />
			<main className="max-w-[1140px] mx-auto px-5 xl:px-0">
				<App />
			</main>
			<Footer />
		</>
	);
};
