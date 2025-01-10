import { About } from "./components/About";
import { Carousel } from "./components/Carousel";
import { Contact } from "./components/Contact";
import { Features } from "./components/Features";
import { Products } from "./components/Products";
import { Services } from "./components/Services";
import { TeamSection } from "./components/TeamSection";
import { Testimonial } from "./components/Testimonial";

export const HomePage = () => {
	return (
		<div className="">
			<Carousel />
			<About />
			<Services />
			<Contact />
			<Products/>
			<TeamSection/>
			<Features/>
			<Testimonial/>
		</div>
	);
};
