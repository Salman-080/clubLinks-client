import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { FacebookAuthProvider, GoogleAuthProvider, OAuthProvider, createUserWithEmailAndPassword, fetchSignInMethodsForEmail, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext(null);
const Provider = ({ children }) => {
  const fbAccessToken=import.meta.env.VITE_fb_token;
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const appleProvider = new OAuthProvider('apple.com');
  const auth = getAuth(app);

  const [passResetRequestSuccess, setPassResetRequestSuccess] = useState("");
  const [passResetRequestError, setPassResetRequestError] = useState("");
  const [alternatePhoto, setAlternatePhoto] = useState("");
  



  const appleSignIn = () => {
    return signInWithPopup(auth, appleProvider);
  }

  const fbSignIn = () => {
    return signInWithPopup(auth, facebookProvider);
  }

  const googleSignIn = () => {

    return signInWithPopup(auth, googleProvider);
  }

  const createUser = (email, password) => {

    return createUserWithEmailAndPassword(auth, email, password)

  }

  const profileInfo = (userName, userImage) => {
    return updateProfile(auth.currentUser, {
      displayName: userName, photoURL: userImage
    })
  }



  const resetPassword = async (email) => {
   


    console.log(email);
    setPassResetRequestSuccess("");
    setPassResetRequestError("");
    if (!email) {
      setPassResetRequestError("Please enter an email!");
      return;
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setPassResetRequestError("Please give an valid email!");
      return;
    } else {
      sendPasswordResetEmail(auth, email)
        .then((res) => {
          // Password reset email sent!
          // ..
          console.log(res);
          setPassResetRequestSuccess("If you have already registered with this email, then a password reset link has already been sent to your email. Please check your email!");

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setPassResetRequestError(errorMessage);

        });
    }

  }



  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

      setUser(currentUser);
      console.log(currentUser)

    });

    return () => {
      unsubscribe();
    }
  }, [])



  const signIn = (email, password) => {

    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {


    return signOut(auth);

  }


  const authInfo = {
    user,
    createUser,
    profileInfo,
    signIn,
    // loading,
    logOut,
    googleSignIn,
    fbSignIn,
    appleSignIn,
    setAlternatePhoto,
    resetPassword,
    passResetRequestSuccess,
    passResetRequestError,
    setPassResetRequestSuccess,
    setPassResetRequestError,
    alternatePhoto,
    fbAccessToken

  }
  console.log(user)
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default Provider;