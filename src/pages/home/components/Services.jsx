import { useEffect, useState } from "react";
import { Paragraph } from "../../../components/Paragraph";
import { SectionHeading } from "../../../components/SectionHeading";
import { SubHeading } from "../../../components/SubHeading";
import { Link } from "react-router";
import { Button } from "../../../components/Button";
import { ServiceItem } from "./ServiceItem";
import toast from "react-hot-toast";

export const Services = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch("https://car-doctor-server-five-self.vercel.app/services")
			.then((res) => res.json())
			.then((data) => setServices(data))
			.catch((error) => {
				if(error.message) {
					toast.error("Something went wrong")
				}
			});
	}, []);
	return (
		<section className="mb-32">
			{/* section header */}
			<div className="space-y-5">
				<SubHeading align="center">Service</SubHeading>
				<SectionHeading align="center">Our Service Area</SectionHeading>
				<div className="max-w-[700px] mx-auto">
					<Paragraph align="center">
						the majority have suffered alteration in some form, by injected
						humour, or randomized words which don&apos;t look even slightly
						believable.
					</Paragraph>
				</div>
			</div>

			{/* services */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
				{services.slice(0, 6).map((service) => (
					<ServiceItem key={service._id} service={service}/>
				))}
			</div>

			{/* button */}
			<Link
				to="/services"
				className="text-center mt-12 flex items-center justify-center"
			>
				<Button variant="outline1">More Videos</Button>
			</Link>
		</section>
	);
};
