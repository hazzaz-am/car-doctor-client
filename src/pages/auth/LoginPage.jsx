import authImg from "../../assets/images/login/login.svg";
import { InputGroup } from "../../components/InputGroup";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { SocialSign } from "./SocialSign";

export const LoginPage = () => {
	const { loginUser } = useAuth();
	const navigate = useNavigate()

	const handleLoginUser = (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		const formData = new FormData(form);

		const email = formData.get("email");
		const password = formData.get("password");

		if (email.length === 0) {
			return toast.error("Please enter a valid email address");
		}

		if (password.length === 0) {
			return toast.error("Password Can not be empty");
		}

		loginUser(email, password)
			.then(() => {
				// Signed up
				// const user = userCredential.user;
				// console.log(user);
				toast.success("Login Successfully");
				form.reset();
				navigate("/")
			})
			.catch(() => {
				// const errorMessage = error.message;
				toast.error(`Something Went Wrong`);
				// console.log("error",errorMessage);
			});
	};

	return (
		<section className="mb-32 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
			<img src={authImg} alt="" className="w-1/2" />
			<div className="border-2 md:w-1/2 p-10 lg:p-[75px]">
				<h2 className="text-center font-semibold text-dark2 text-[40px]">
					Login
				</h2>

				{/* sign up form */}
				<form onSubmit={handleLoginUser} className="space-y-8 mt-12">
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
				<SocialSign/>

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
