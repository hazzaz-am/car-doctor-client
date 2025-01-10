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
import { auth } from "../firebase/firebase.console";

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
    setLoading(true)
    return signOut(auth);
  }

  // google sign in
  const signinWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  }
	// set current user
	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (user) => {
			setUser(user);
			setLoading(false);
		});

		return () => unSubscribe();
	}, []);

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
