import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ServiceBanner } from "./components/ServiceBanner";

export const ServiceDetails = () => {
	const [service, setService] = useState({});
	const { serviceId } = useParams();
	console.log(serviceId);
	console.log(service);
	useEffect(() => {
		fetch(`http://localhost:5000/services/${serviceId}`)
			.then((res) => res.json())
			.then((data) => setService(data));
	}, [serviceId]);

	return (
		<section>
			<ServiceBanner />
		</section>
	);
};
