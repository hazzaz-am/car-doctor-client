import { Link } from "react-router";
import { ServiceBanner } from "../service/components/ServiceBanner";
import { PiArrowBendUpLeftBold } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const OrdersPage = () => {
	const [orders, setOrders] = useState([]);
	const { user } = useAuth();
	const userEmail = user?.email;

	const handleDeleteOrder = (id) => {
		fetch(`https://car-doctor-server-five-self.vercel.app/bookings/${id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount) {
					const remainingOrders = orders.filter((order) => order._id !== id);
					setOrders([...remainingOrders]);
					toast.success("Deleted Successfully");
				}
			})
			.catch((error) => console.log(error.message));
	};

	const handleClearCart = () => {
		fetch("https://car-doctor-server-five-self.vercel.app/bookings", {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount) {
					toast.success("Remove all item successfully");
					setOrders([]);
				}
			});
	};

	const handleUpdateOrder = (order) => {
		const updatedOrder = {
			...order,
			status: "confirmed",
		};

		fetch(
			`https://car-doctor-server-five-self.vercel.app/bookings/${order?._id}`,
			{
				method: "PUT",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(updatedOrder),
			}
		)
			.then((res) => res.json())
			.then((data) => {
				const updatedOrders = orders.filter((item) => item._id !== order._id);
				setOrders([...updatedOrders, updatedOrder]);

				if (data.matchedCount === 1) {
					toast.success("Order Confirm Successfully");
				}
			});
		// .catch((error) => console.log(error.message));
	};

	const url = `https://car-doctor-server-five-self.vercel.app/bookings?email=${userEmail}`;
	useEffect(() => {
		fetch(url, {
			credentials: "include",
		})
			.then((res) => res.json())
			.then((data) => setOrders(data))
			.catch((err) => console.log(err.message));
	}, [url]);

	return (
		<section className="mb-32">
			<ServiceBanner
				title="Cart Details"
				pathName="Services"
				path="/services"
			/>

			{/* cart items */}
			{orders.length === 0 && (
				<p className="text-xl font-bold text-dark1">You Have No Orders</p>
			)}
			{orders?.map((order) => (
				<div
					key={order._id}
					className="flex items-start md:items-center md:justify-between gap-2 md:gap-28 mt-7"
				>
					{/* information */}
					<div className="flex flex-col md:flex-row items-center justify-between md:flex-1 gap-8">
						{/* delete and img */}
						<div className="flex items-center gap-2 md:gap-7">
							<button
								onClick={() => handleDeleteOrder(order._id)}
								className="p-2 lg:p-4 text-center  rounded-full bg-dark2 text-white lg:text-xl"
							>
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
					<button
						onClick={() => handleUpdateOrder(order)}
						className={`bg-primary border-2 border-primary ${
							!order?.status && "hover:bg-transparent hover:text-primary"
						} py-3 px-4 text-white rounded-lg transition-colors duration-500`}
						disabled={order?.status}
					>
						{order?.status ? "Confirmed" : "Confirm"}
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
				<button
					onClick={handleClearCart}
					className="flex items-center gap-1 md:gap-2 text-dark2 text-xs lg:text-xl"
				>
					{/* clear cart */}
					<RiDeleteBinLine />
					Clear Shopping Cart
				</button>
			</div>
		</section>
	);
};
