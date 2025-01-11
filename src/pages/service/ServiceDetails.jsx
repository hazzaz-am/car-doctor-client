import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ServiceBanner } from "./components/ServiceBanner";
import { ServiceSidebar } from "./components/ServiceSidebar";
import { ServiceDetailsMain } from "./components/ServiceDetailsMain";

export const ServiceDetails = () => {
	const [service, setService] = useState({});
	const { serviceId } = useParams();

	useEffect(() => {
		fetch(`http://localhost:5000/services/${serviceId}`)
			.then((res) => res.json())
			.then((data) => setService(data));
	}, [serviceId]);

	return (
		<section className="mb-32">
			<ServiceBanner />
			<div className="flex gap-6">
				{/* service details main */}
				<ServiceDetailsMain service={service} />

				{/* service details sidebar */}
				<ServiceSidebar activeCategory={service?.title} price={service?.price}/>
			</div>
		</section>
	);
};
