import calender from '../../../assets/icons/calender.svg'
import phone from '../../../assets/icons/phone.svg'
import location from '../../../assets/icons/location.svg'
import { IconBox } from '../../../components/IconBox';

export const Contact = () => {
	return (
		<div className="bg-dark1 py-24 px-16 rounded-lg mb-32 flex flex-col justify-between gap-12 md:flex-row items-center">
			<IconBox
				icon={calender}
				title="We are open monday-friday"
				subTitle="7:00 am - 9:00 pm"
			/>
			<IconBox
				icon={phone}
				title="Have a question?"
				subTitle="+2546 251 2658"
			/>
			<IconBox
				icon={location}
				title="Need a repair? our address"
				subTitle="Liza Street, New York"
			/>
		</div>
	);
};
