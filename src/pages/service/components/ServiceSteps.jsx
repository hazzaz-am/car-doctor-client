import { Paragraph } from "../../../components/Paragraph";

export const ServiceSteps = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
			<div className="space-y-5 border rounded-lg py-4 px-4 md:py-9 md:px-10 text-center">
				<div className="bg-primary/25 rounded-full h-12 w-12 md:h-24 md:w-24 mx-auto flex items-center justify-center">
					<div className="bg-primary rounded-full h-8 w-8 md:h-16 md:w-16 flex items-center justify-center text-white font-bold text-xs md:text-xl">
						01
					</div>
				</div>
				<h2 className="font-bold md:text-xl text-dark1">STEP ONE</h2>
				<Paragraph>It uses a dictionary of over 200 .</Paragraph>
			</div>
			<div className="space-y-5 border rounded-lg py-4 px-4 md:py-9 md:px-10 text-center">
				<div className="bg-primary/25 rounded-full h-12 w-12 md:h-24 md:w-24 mx-auto flex items-center justify-center">
					<div className="bg-primary rounded-full h-8 w-8 md:h-16 md:w-16 flex items-center justify-center text-white font-bold text-xs md:text-xl">
						02
					</div>
				</div>
				<h2 className="font-bold md:text-xl text-dark1">STEP TWO</h2>
				<Paragraph>It uses a dictionary of over 200 .</Paragraph>
			</div>
			<div className="space-y-5 border rounded-lg py-4 px-4 md:py-9 md:px-10 text-center">
				<div className="bg-primary/25 rounded-full h-12 w-12 md:h-24 md:w-24 mx-auto flex items-center justify-center">
					<div className="bg-primary rounded-full h-8 w-8 md:h-16 md:w-16 flex items-center justify-center text-white font-bold text-xs md:text-xl">
						03
					</div>
				</div>
				<h2 className="font-bold md:text-xl text-dark1">STEP THREE</h2>
				<Paragraph>It uses a dictionary of over 200 .</Paragraph>
			</div>
		</div>
	);
};
