import { About } from "./components/About";
import { Carousel } from "./components/Carousel";
import { Contact } from "./components/Contact";
import { Products } from "./components/Products";
import { Services } from "./components/Services";
import { TeamSection } from "./components/TeamSection";

export const HomePage = () => {
	return (
		<div className="">
			<Carousel />
			<About />
			<Services />
			<Contact />
			<Products/>
			<TeamSection/>
		</div>
	);
};
