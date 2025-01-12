import PropTypes, { element } from "prop-types";
import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";
import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import axios from "axios";
import toast from "react-hot-toast";

const provider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	// create new user
	const createNewUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// login user
	const loginUser = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	// log out user
	const logoutUser = () => {
		setLoading(true);
		return signOut(auth);
	};

	// google sign in
	const signinWithGoogle = () => {
		setLoading(true);
		return signInWithPopup(auth, provider);
	};
	// set current user
	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
			const userEmail = currentUser?.email || user?.email;
			const loggedUser = { email: userEmail };

			setUser(currentUser);
			setLoading(false);
			// console.log("current user", currentUser);

			if (currentUser) {
				axios
					.post(
						"https://car-doctor-server-five-self.vercel.app/jwt",
						loggedUser,
						{
							withCredentials: true,
						}
					)
					.then((res) => {
						if (res.data.success === false) {
							toast.success("Unauthorized user");
						}
					});
			} else {
				axios
					.post(
						"https://car-doctor-server-five-self.vercel.app/logout",
						loggedUser,
						{
							withCredentials: true,
						}
					)
					.then((res) => {
						if (res.data.success === false) {
							toast.error("Something went wrong with user");
						}
					});
			}
		});

		return () => unSubscribe();
	}, [user]);

	const value = {
		user,
		loading,
		createNewUser,
		loginUser,
		logoutUser,
		signinWithGoogle,
	};
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
	children: PropTypes.arrayOf(element),
};
