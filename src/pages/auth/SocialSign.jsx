import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export const SocialSign = () => {
	const { signinWithGoogle } = useAuth();
	const navigate = useNavigate()


	const handleGoogleSignin = () => {
		signinWithGoogle()
			.then(() => {
				toast.success("Sign in successfully");
				navigate("/")
			})
			.catch(() => {
				toast.error("Something went wrong");
			});
	};
	return (
		<div className="mt-8 mb-14">
			<p className="text-center font-medium text-dark2">OR</p>
			<button
				onClick={handleGoogleSignin}
				className="text-dark1 flex items-center gap-2 border-2 w-full justify-center py-3 rounded-lg mt-4 hover:border-primary hover:text-primary duration-500 transition-colors"
			>
				<FcGoogle className="text-xl" />
				<p className="capitalize font-medium">Sign in with Google</p>
			</button>
		</div>
	);
};
