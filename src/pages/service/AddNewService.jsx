import toast from "react-hot-toast";
import { Button } from "../../components/Button";
import { Input } from "../checkout/components/Input";
import { ServiceBanner } from "./components/ServiceBanner";

export const AddNewService = () => {
	const handleAddNewService = (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		const formData = new FormData(form);

		const title = formData.get("title");
		const price = formData.get("price");
		const description = formData.get("description");

		if (title.length === 0 || price.length === 0 || description.length === 0) {
			return toast.error("Field can not be empty");
		}

		const newBooking = {
			title,
			price,
			service_id: Date.now().toString(),
			description,
			img: "https://placehold.co/750x400",
		};
    
		fetch("http://localhost:5000/services", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(newBooking),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					toast.success("New Service Added");
				} else {
					toast.error("Something Went Wrong");
				}
			});
	};
	return (
		<section className="mb-32">
			<ServiceBanner pathName="Services" path={`/services`} title="Add New Service"/>

			{/* form */}
			<div className="bg-dark7 px-4 py-4 md:px-20 md:py-24 rounded-lg">
				<form onSubmit={handleAddNewService} className="space-y-6">
					<div className="flex flex-col md:flex-row items-center justify-between gap-6">
						<Input name="title" placeholder="Service Name" />
						<Input name="price" placeholder="Service Charge" />
					</div>
					<div className="flex flex-col md:flex-row items-center justify-between gap-6">
						{/* <Input type="number" name="service_id" placeholder="Your Service id" /> */}
						<Input name="serviceType" placeholder="Service Type" />
					</div>
					<div>
						<textarea
							name="description"
							id="description"
							placeholder="Service Details"
							className="w-full py-2 px-3 lg:py-4 lg:px-6 rounded-lg text-sm lg:text-base text-dark4 leading-[30px]"
						></textarea>
					</div>
					<Button size="lg" variant="primary">
						Add Service
					</Button>
				</form>
			</div>
		</section>
	);
};
