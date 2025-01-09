import { About } from "./components/About";
import { Carousel } from "./components/Carousel";
import { Contact } from "./components/Contact";
import { Services } from "./components/Services";

export const HomePage = () => {
	return (
		<div className="">
			<Carousel />
			<About />
			<Services />
			<Contact />
		</div>
	);
};
