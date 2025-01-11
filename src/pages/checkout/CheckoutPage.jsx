import { Button } from "../../components/Button";
import { ServiceBanner } from "../service/components/ServiceBanner"
import { Input } from "./components/Input"

export const CheckoutPage = () => {

	const handleOrderConfirmForm = (event) => {
		event.preventDefault()
		const form = event.currentTarget
		const formData = new FormData(form)
		console.log(formData.get("firstName"));
		console.log(formData.get("lastName"));
		console.log(formData.get("phone"));
		console.log(formData.get("email"));
		console.log(formData.get("message"));
	}

  return (
		<section className="mb-32">
			<ServiceBanner pathName="Checkout" path="/checkout" />

			{/* form */}
			<div className="bg-dark7 px-4 py-4 md:px-20 md:py-24 rounded-lg">
				<form onSubmit={handleOrderConfirmForm} className="space-y-6">
					<div className="flex flex-col md:flex-row items-center justify-between gap-6">
						<Input name="firstName" placeholder="First Name" />
						<Input name="lastName" placeholder="Last Name" />
					</div>
					<div className="flex  flex-col md:flex-row items-center justify-between gap-6">
						<Input type="tel" name="phone" placeholder="Your Phone" />
						<Input type="email" name="email" placeholder="Your Email" />
					</div>
					<div>
						<textarea
							placeholder="Your Message"
							name="message"
							id="message"
							className="w-full py-2 px-3 lg:py-4 lg:px-6 rounded-lg text-sm lg:text-base text-dark4 leading-[30px]"
						></textarea>
					</div>
					<Button size="lg" variant="primary">
						Order Confirm
					</Button>
				</form>
			</div>
		</section>
	);
}