import { Paragraph } from "../../../components/Paragraph";
import { SectionHeading } from "../../../components/SectionHeading";
import { SubHeading } from "../../../components/SubHeading";
import { SingleReview } from "./SingleReview";

export const Testimonial = () => {
	return (
		<section className="mb-32">
			{/* section header */}
			<div className="space-y-5">
				<SubHeading align="center">Testimonial</SubHeading>
				<SectionHeading align="center">What Customer Says</SectionHeading>
				<div className="max-w-[700px] mx-auto">
					<Paragraph align="center">
						the majority have suffered alteration in some form, by injected
						humour, or randomized words which don&apos;t look even slightly
						believable.
					</Paragraph>
				</div>
			</div>

			{/* testimonial */}
			<div className="mt-14 flex flex-col md:flex-row items-center justify-between gap-6">
				<SingleReview />
				<SingleReview />
			</div>
		</section>
	);
};
