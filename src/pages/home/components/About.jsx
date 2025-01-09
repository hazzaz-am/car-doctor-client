import firstImg from "../../../assets/images/about_us/person.jpg";
import secondImg from "../../../assets/images/about_us/parts.jpg";
import { SubHeading } from "../../../components/SubHeading";
import { SectionHeading } from "../../../components/SectionHeading";
import { Paragraph } from "../../../components/Paragraph";
import { Button } from "../../../components/Button";

export const About = () => {
	return (
		<div className="flex flex-col-reverse lg:flex-row justify-between gap-14 mb-32">
			<div className="lg:w-1/2 relative">
				<img src={firstImg} alt="" className="w-3/4 rounded-md" />
				<img
					src={secondImg}
					alt=""
					className="w-1/2 rounded-md border-8 border-white absolute right-0 top-1/2"
				/>
			</div>
			<div className="lg:w-1/2 space-y-6">
				<SubHeading>About Us</SubHeading>
				<SectionHeading>
					We are qualified & of experience in this field
				</SectionHeading>
				<Paragraph>
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered alteration in some form, by injected
					humour, or randomized words which don&apos;t look even slightly
					believable.
				</Paragraph>
				<Paragraph>
					the majority have suffered alteration in some form, by injected
					humour, or randomized words which don&apos;t look even slightly believable.
				</Paragraph>
				<Button variant="primary">Get More Info</Button>
			</div>
		</div>
	);
};
