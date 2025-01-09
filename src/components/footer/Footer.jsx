import logo from "../../assets/logo/footer-logo.svg";
import {
	FaGoogle,
	FaSquareXTwitter,
	FaInstagram,
	FaLinkedinIn,
} from "react-icons/fa6";
import { FooterMenu } from "./FooterMenu";
import { FooterLink } from "./FooterLink";

export const Footer = () => {
	return (
		<footer className="bg-dark1 py-28">
			<div className="max-w-[1140px] mx-auto px-5 xl:px-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
				<div className=" space-y-5">
					<img src={logo} alt="footer_logo" />
					<p className="text-base text-[#E8E8E8]">
						Edwin Diaz is a software and web technologies engineer, a life coach
						trainer who is also a serial .
					</p>
					<div className="flex items-center gap-2">
						<a
							href="https://www.google.com/"
							target="_blank"
							className="inline-block bg-[#2c2c2c] p-3 rounded-full"
						>
							<FaGoogle size={14} className="text-white" />
						</a>
						<a
							href="https://x.com/"
							target="_blank"
							className="inline-block bg-[#2c2c2c] p-3 rounded-full"
						>
							<FaSquareXTwitter size={14} className="text-white" />
						</a>
						<a
							href="https://www.instagram.com/"
							target="_blank"
							className="inline-block bg-[#2c2c2c] p-3 rounded-full"
						>
							<FaInstagram size={14} className="text-white" />
						</a>
						<a
							href="https://www.linkedin.com/"
							target="_blank"
							className="inline-block bg-[#2c2c2c] p-3 rounded-full"
						>
							<FaLinkedinIn size={14} className="text-white" />
						</a>
					</div>
				</div>
				<div className="">
					<FooterMenu title="About">
						<FooterLink title="Home" />
						<FooterLink title="Service" />
						<FooterLink title="Contact" />
					</FooterMenu>
				</div>
				<div className="">
					<FooterMenu title="Company">
						<FooterLink title="Why Car Doctor" />
						<FooterLink title="About" />
					</FooterMenu>
				</div>
				<div className="">
					<FooterMenu title="Support">
						<FooterLink title="Support Center" />
						<FooterLink title="Feedback" />
						<FooterLink title="Accessability" />
					</FooterMenu>
				</div>
			</div>
		</footer>
	);
};
