import sliderImg1 from "../../../assets/images/homeCarousel/1.jpg";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { Button } from "../../../components/Button";

export const Carousel = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${sliderImg1})`,
			}}
			className="bg-center bg-cover rounded-md object-cover mb-32"
		>
			<div className="py-10 px-5 lg:py-24 lg:px-28 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-md md:flex md:justify-between">
				<div className="w-full md:w-2/3 space-y-7">
					<h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-center md:text-left">
						Affordable Price For Car Servicing
					</h1>
					<p className="text-white text-center md:text-left text-sm md:text-[18px]">
						There are many variations of passages of available, but the majority
						have suffered alteration in some form
					</p>
					<div className="flex items-center justify-center md:justify-start gap-4">
						<Button variant="primary">Discover More</Button>
						<Button variant="outline2">Latest Project</Button>
					</div>
				</div>
				<div className="w-full md:w-1/3 flex items-end justify-center mt-20 md:mt-0 md:justify-end gap-4">
					<button className="bg-[#ffffff33] text-white p-4 rounded-full">
						<FaArrowLeft />
					</button>
					<button className="bg-primary text-white p-4 rounded-full">
						<FaArrowRight />
					</button>
				</div>
			</div>
		</div>
	);
};
