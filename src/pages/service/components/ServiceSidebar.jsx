import { useState } from "react";
import { useEffect } from "react";
import { SingleCategory } from "./SingleCategory";
import PropTypes from "prop-types";
import { FileDownload } from "./FileDownload";
import logo from "../../../assets/logo/footer-logo.svg";
import { Button } from "../../../components/Button";
import { Link } from "react-router";

export const ServiceSidebar = ({ activeCategory, price }) => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/services")
			.then((res) => res.json())
			.then((data) => setCategories(data));
	}, []);

	return (
		<div className="w-1/2 md:w-1/3">
			{/* service category */}
			<div className="bg-dark7 px-2 py-4 md:p-10 rounded-lg mb-8">
				<h2 className="font-bold text-dark1 md:text-2xl">Services</h2>
				<div className="mt-5 space-y-5">
					{categories?.map((service) => (
						<SingleCategory
							key={service?._id}
							title={service?.title}
							activeCategory={activeCategory}
							id={service?._id}
						/>
					))}
				</div>
			</div>

			{/* download */}
			<div className="bg-dark1 py-4 px-2 md:py-12 md:px-9 rounded-lg">
				<h2 className="text-white font-bold md:text-2xl">Download</h2>
				<div className="space-y-5 mt-5">
					<FileDownload title="Our Brochure" />
					<FileDownload title="Company Details" />
				</div>
			</div>

			{/* discount */}
			<div className="bg-dark1 p-4 md:p-10 rounded-lg mt-7">
				<img src={logo} alt="" className="mx-auto" />
				<h2 className="text-white font-bold text-xs md:text-xl text-center mt-5">
					Need Help? We Are Here To Help You
				</h2>

				<div className="mt-8 bg-white rounded-lg text-center p-4 md:p-10 space-y-3">
					<h2 className="text-xs md:text-xl font-bold text-primary">
						Car Doctor <span className="text-dark1">Special</span>
					</h2>
					<p className="font-bold text-dark3 text-xs md:text-base">
						Save up to <span className="text-primary">60% off</span>
					</p>
				</div>
				<div className="relative top-2 md:-top-7 text-center">
					<Button variant="primary">Get A Quote</Button>
				</div>
			</div>

			<h2 className="text-dark1 md:text-4xl font-bold mt-7 mb-9">
				Price $ {price}
			</h2>
			<Link to="/checkout">
				<Button size="lg" variant="primary">
					Checkout
				</Button>
			</Link>
		</div>
	);
};

ServiceSidebar.propTypes = {
	activeCategory: PropTypes.string,
	price: PropTypes.string,
};
