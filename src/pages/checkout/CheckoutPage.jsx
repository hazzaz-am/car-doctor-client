import { useParams } from "react-router";
import { Button } from "../../components/Button";
import { ServiceBanner } from "../service/components/ServiceBanner";
import { Input } from "./components/Input";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import toast from "react-hot-toast";

export const CheckoutPage = () => {
	const [service, setService] = useState({});
	const { checkoutId } = useParams();
	const { user } = useAuth();

	const handleOrderConfirmForm = (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		const formData = new FormData(form);
		const name = formData.get("name");
		const phone = formData.get("phone");
		const date = formData.get("date");
		const email = formData.get("email");

		if (
			name.length === 0 ||
			phone.length === 0 ||
			date.length === 0 ||
			email.length === 0
		) {
			return toast.error("Field can not be empty");
		}

		const bookingInformation = {
			customer_name: name,
			email,
			phone,
			date,
			service_id: service?._id,
			price: service?.price,
		};

		fetch("https://car-doctor-server-five-self.vercel.app/bookings", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(bookingInformation),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					toast.success("Order Place Successfully");
				} else {
					toast.error("Something Went Wrong");
				}
			});

		form.reset();
	};

	useEffect(() => {
		fetch(
			`https://car-doctor-server-five-self.vercel.app/services/${checkoutId}`
		)
			.then((res) => res.json())
			.then((data) => setService(data));
	}, [checkoutId]);

	return (
		<section className="mb-32">
			<ServiceBanner pathName="Checkout" path={`/checkout/${checkoutId}`} title="Checkout"/>

			{/* form */}
			<div className="bg-dark7 px-4 py-4 md:px-20 md:py-24 rounded-lg">
				<form onSubmit={handleOrderConfirmForm} className="space-y-6">
					<div className="flex flex-col md:flex-row items-center justify-between gap-6">
						<Input name="name" placeholder="Your Name" />
						<Input type="date" name="date" />
					</div>
					<div className="flex flex-col md:flex-row items-center justify-between gap-6">
						<Input type="tel" name="phone" placeholder="Your Phone" />
						<Input
							type="email"
							name="email"
							placeholder="Your Email"
							value={user?.email}
						/>
					</div>
					<Button size="lg" variant="primary">
						Order Confirm
					</Button>
				</form>
			</div>
		</section>
	);
};
