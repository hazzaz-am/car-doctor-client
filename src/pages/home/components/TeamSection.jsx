import { Paragraph } from "../../../components/Paragraph";
import { SectionHeading } from "../../../components/SectionHeading";
import { SubHeading } from "../../../components/SubHeading";
import member1 from "../../../assets/images/team/1.jpg";
import member2 from "../../../assets/images/team/2.jpg";
import member3 from "../../../assets/images/team/3.jpg";
import { TeamMember } from "./TeamMember";

export const TeamSection = () => {
	return (
		<section className="mb-32">
			{/* section header */}
			<div className="space-y-5">
				<SubHeading align="center">Team</SubHeading>
				<SectionHeading align="center">Meet Our Team</SectionHeading>
				<div className="max-w-[700px] mx-auto">
					<Paragraph align="center">
						the majority have suffered alteration in some form, by injected
						humour, or randomized words which don&apos;t look even slightly
						believable.
					</Paragraph>
				</div>
			</div>

			{/* members */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 gap-6">
				<TeamMember img={member1} />
				<TeamMember img={member2} />
				<TeamMember img={member3} />
			</div>
		</section>
	);
};
