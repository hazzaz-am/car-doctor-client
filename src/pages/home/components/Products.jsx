import { useEffect, useState } from "react";
import { Paragraph } from "../../../components/Paragraph";
import { SectionHeading } from "../../../components/SectionHeading";
import { SubHeading } from "../../../components/SubHeading";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa";


export const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("/products.json")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);
	return (
		<section className="mb-32">
			{/* section header */}
			<div className="space-y-5">
				<SubHeading align="center">Popular Products</SubHeading>
				<SectionHeading align="center">Browse Our Products</SectionHeading>
				<div className="max-w-[700px] mx-auto">
					<Paragraph align="center">
						the majority have suffered alteration in some form, by injected
						humour, or randomised words which don&apos;t look even slightly
						believable.
					</Paragraph>
				</div>
			</div>

			{/* products loader */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
				{products.map((product) => (
					<div
						key={product._id}
						className="border-2 py-6 px-4"
					>
						<div className="bg-dark7 px-16 py-12 relative rounded-lg">
							<div className="max-w-40 max-h-36 mx-auto">
								<img
									src={product.img}
									alt=""
									className="w-full h-full object-cover"
								/>
							</div>
							<Link
								to="/cart"
								className="absolute top-4 right-4 bg-white p-[14px] rounded-lg"
							>
								<MdOutlineShoppingBag className="text-primary text-xl" />
							</Link>
						</div>
						<div className="space-y-[10px]">
							<div className="flex items-center justify-center mt-5 gap-1">
								<FaStar className="text-[#FF912C] text-xl" />
								<FaStar className="text-[#FF912C] text-xl" />
								<FaStar className="text-[#FF912C] text-xl" />
								<FaStar className="text-[#FF912C] text-xl" />
								<FaStar className="text-[#FF912C] text-xl" />
							</div>
							<h4 className="font-bold text-dark2 lg:text-2xl text-center">
								{product.title}
							</h4>
							<h5 className="font-semibold lg:text-xl text-primary text-center">
								Price: ${product.price}
							</h5>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
