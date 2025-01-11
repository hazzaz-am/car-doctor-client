import { Paragraph } from "../../../components/Paragraph";

export const ServiceSteps = () => {
	return (
		<div className="flex items-center gap-3 mb-8">
			<div className="space-y-5 border rounded-lg py-9 px-10 text-center">
				<div className="bg-primary/25 rounded-full h-24 w-24 mx-auto flex items-center justify-center">
					<div className="bg-primary rounded-full h-16 w-16 flex items-center justify-center text-white font-bold text-xl">
						01
					</div>
				</div>
				<h2 className="font-bold text-xl text-dark1">STEP ONE</h2>
				<Paragraph>It uses a dictionary of over 200 .</Paragraph>
			</div>
			<div className="space-y-5 border rounded-lg py-9 px-10 text-center">
				<div className="bg-primary/25 rounded-full h-24 w-24 mx-auto flex items-center justify-center">
					<div className="bg-primary rounded-full h-16 w-16 flex items-center justify-center text-white font-bold text-xl">
						02
					</div>
				</div>
				<h2 className="font-bold text-xl text-dark1">STEP TWO</h2>
				<Paragraph>It uses a dictionary of over 200 .</Paragraph>
			</div>
			<div className="space-y-5 border rounded-lg py-9 px-10 text-center">
				<div className="bg-primary/25 rounded-full h-24 w-24 mx-auto flex items-center justify-center">
					<div className="bg-primary rounded-full h-16 w-16 flex items-center justify-center text-white font-bold text-xl">
						03
					</div>
				</div>
				<h2 className="font-bold text-xl text-dark1">STEP THREE</h2>
				<Paragraph>It uses a dictionary of over 200 .</Paragraph>
			</div>
		</div>
	);
};
