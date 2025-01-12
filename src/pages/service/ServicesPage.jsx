import { useEffect, useState } from "react";
import { ServiceItem } from "../home/components/ServiceItem";
import toast from "react-hot-toast";

export const ServicesPage = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch("https://car-doctor-server-five-self.vercel.app/services")
			.then((res) => res.json())
			.then((data) => setServices(data))
			.catch((error) => {
				if (error.message) {
					toast.error("Can not load data");
				}
			});
	}, []);
	return (
		<section className="mb-32">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
				{services.map((service) => (
					<ServiceItem key={service._id} service={service} />
				))}
			</div>
		</section>
	);
};
