import { Link } from "react-router";
import { ServiceBanner } from "../service/components/ServiceBanner";
import { PiArrowBendUpLeftBold } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";

export const OrdersPage = () => {
	const [orders, setOrders] = useState([]);
	const { user } = useAuth();
	const userEmail = user?.email;

	useEffect(() => {
		fetch(`http://localhost:5000/bookings?email=${userEmail}`)
			.then((res) => res.json())
			.then((data) => setOrders(data))
			.catch((err) => console.log(err.message));
	}, [userEmail]);

	return (
		<section className="mb-32">
			<ServiceBanner
				title="Cart Details"
				pathName="Services"
				path="/services"
			/>

			{/* cart items */}
			{orders?.map((order) => (
				<div
					key={order._id}
					className="flex items-start md:items-center md:justify-between gap-2 md:gap-28 mt-7"
				>
					{/* information */}
					<div className="flex flex-col md:flex-row items-center justify-between md:flex-1 gap-8">
						{/* delete and img */}
						<div className="flex items-center gap-2 md:gap-7">
							<button className="p-2 lg:p-4 text-center  rounded-full bg-dark2 text-white lg:text-xl">
								<RxCross2 />
							</button>
							<div>
								<img
									src="https://placehold.co/150x150"
									alt=""
									className="rounded-lg object-cover w-full"
								/>
							</div>
						</div>
						{/* order details */}
						<div className="flex flex-col md:flex-row md:flex-1 justify-between md:items-center gap-4 lg:gap-0">
							<div>
								<h4 className="text-dark2 lg:text-xl font-semibold">
									Martha Knit Top
								</h4>
								<p className="text-dark4 text-xs lg:text-base">
									<span className="font-bold text-dark1">Service Id:</span>{" "}
									{order.service_id}
								</p>
							</div>
							<p className="text-xs lg:text-xl text-dark2 font-semibold">
								${order.price}
							</p>
							<p className="text-xs lg:text-xl font-medium text-[#2D2D2D]">
								<span className="font-bold">Booked:</span> {order.date}
							</p>
						</div>
					</div>
					{/* button */}
					<button className="bg-primary py-3 px-4 text-white rounded-lg">
						Pending
					</button>
				</div>
			))}

			{/* bottom */}
			<div className="flex items-center justify-between mt-20">
				<Link
					to="/services"
					className="flex items-center gap-2 text-dark2 text-xs lg:text-xl"
				>
					{/* continue shopping */}
					<PiArrowBendUpLeftBold />
					<p>Continue Shopping</p>
				</Link>
				<button className="flex items-center gap-1 md:gap-2 text-dark2 text-xs lg:text-xl">
					{/* clear cart */}
					<RiDeleteBinLine />
					Clear Shopping Cart
				</button>
			</div>
		</section>
	);
};
