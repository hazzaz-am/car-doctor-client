import { Paragraph } from "../../../components/Paragraph";
import { Review } from "../../../components/Review";
import client from "../../../assets/images/client.png";
import quote from "../../../assets/icons/quote.svg";

export const SingleReview = () => {
	return (
		<div className="space-y-7 border-2 rounded-lg px-4 py-8 lg:px-12 lg:py-14">
			{/* review header */}
			<div className="flex items-center justify-between">
				{/* right side */}
				<div className="flex items-center gap-4">
					<img src={client} alt="" />
					<div className="lg:space-y-[10px]">
						<h4 className="font-bold lg:text-2xl text-dark2">Awlad Hossain</h4>
						<h5 className="font-semibold text-dark3 lg:text-xl">Businessmen</h5>
					</div>
				</div>
				{/* left side */}
				<img src={quote} alt="" className="w-10 h-10 lg:w-14 lg:h-14" />
			</div>

			{/* review */}
			<Paragraph>
				There are many variations of passages of Lorem Ipsum available, but the
				majority have suffered alteration in some form, by injected humour, or
				randomized words which don&apos;t look even slightly believable.
			</Paragraph>

			{/* star */}
			<div className="flex items-center gap-1">
				<Review />
			</div>
		</div>
	);
};
