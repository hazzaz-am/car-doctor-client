import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../../hooks/useAuth";
import toast from "react-hot-toast";

export const SocialSign = () => {
	const { signinWithGoogle } = useAuth();
	const handleGoogleSignin = () => {
		signinWithGoogle()
			.then(() => {
				// console.log(result);
				toast.success("Sign in successfully");
			})
			.catch(() => {
				// console.log(error.message);
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
