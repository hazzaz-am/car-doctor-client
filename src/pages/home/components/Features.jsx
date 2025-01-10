import { Paragraph } from "../../../components/Paragraph";
import { SectionHeading } from "../../../components/SectionHeading";
import { SubHeading } from "../../../components/SubHeading";
import team from "../../../assets/icons/group.svg";
import clock from "../../../assets/icons/clock.svg";
import support from "../../../assets/icons/support.svg";
import equipment from "../../../assets/icons/equipment.svg";
import guarantee from "../../../assets/icons/guarantee.svg";
import delivery from "../../../assets/icons/delivery.svg";
import { SingleFeature } from "./SingleFeature";

export const Features = () => {
	return (
		<section className="mb-32">
			{/* section header */}
			<div className="space-y-5">
				<SubHeading align="center">Core Features</SubHeading>
				<SectionHeading align="center">Why Choose Us</SectionHeading>
				<div className="max-w-[700px] mx-auto">
					<Paragraph align="center">
						the majority have suffered alteration in some form, by injected
						humour, or randomized words which don&apos;t look even slightly
						believable.
					</Paragraph>
				</div>
			</div>

			{/* features */}
			<div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
				<SingleFeature img={team} title="Expert Team" />
				<SingleFeature
					img={clock}
					title="Timely Delivery"
					color="white"
					bg="primary"
				/>
				<SingleFeature img={support} title="24/7 Support" />
				<SingleFeature img={equipment} title="Best Equipment" />
				<SingleFeature img={guarantee} title="100% Guarantee" />
				<SingleFeature img={delivery} title="Timely Delivery" />
			</div>
		</section>
	);
};
