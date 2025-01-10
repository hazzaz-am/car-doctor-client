import { FcGoogle } from "react-icons/fc";
import authImg from "../../assets/images/login/login.svg";
import { InputGroup } from "../../components/InputGroup";
import { Link } from "react-router";

export const LoginPage = () => {
	return (
		<section className="mb-32 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
			<img src={authImg} alt="" className="w-1/2" />
			<div className="border-2 md:w-1/2 p-10 lg:p-[75px]">
				<h2 className="text-center font-semibold text-dark2 text-[40px]">
					Login
				</h2>

				{/* sign up form */}
				<form className="space-y-8 mt-12">
					<InputGroup
						type="email"
						name="email"
						labelTitle="Email"
						placeholder="Your Email"
					/>
					<InputGroup
						type="password"
						name="password"
						labelTitle="Password"
						placeholder="******"
					/>
					<div className="">
						<input
							type="submit"
							value="Login"
							className="bg-primary w-full text-white py-3 rounded-lg cursor-pointer text-xl font-semibold"
						/>
					</div>
				</form>

				{/* social sign up */}
				<div className="mt-8 mb-14">
					<p className="text-center font-medium text-dark2">OR</p>
					<button className="text-dark1 flex items-center gap-2 border-2 w-full justify-center py-3 rounded-lg mt-4 hover:border-primary hover:text-primary duration-500 transition-colors">
						<FcGoogle className="text-xl" />
						<p className="capitalize font-medium">Sign in with Google</p>
					</button>
				</div>

				{/* bottom */}
				<p className="text-center text-dark3 text-lg">
					New Here ?{" "}
					<Link to="/signup" className="text-primary font-semibold">
						Sign Up
					</Link>
				</p>
			</div>
		</section>
	);
};
