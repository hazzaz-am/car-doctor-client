import { About } from "./components/About";
import { Carousel } from "./components/Carousel";
import { Services } from "./components/Services";


export const HomePage = () => {
	return (
		<div className="">
      <Carousel/>
      <About/>
      <Services/>
    </div>
	);
};
