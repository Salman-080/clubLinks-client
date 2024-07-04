import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { FacebookAuthProvider, GoogleAuthProvider, OAuthProvider, createUserWithEmailAndPassword, fetchSignInMethodsForEmail, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext(null);
const Provider = ({ children }) => {
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
    }else {
      sendPasswordResetEmail(auth, email)
        .then((res) => {
          // Password reset email sent!
          // ..
          console.log(res);
          setPassResetRequestSuccess("A password reset link is sent to your email. Please check your email!");

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setPassResetRequestError(errorMessage);

        });
    }

  }


  // "${firebaseAuth.getCurrentUser().getPhotoUrl()}?access_token=EAAEUDGyDSJABO7dn8AmPOIKId4cYsGBKZCrWCjs5y6vVDwiynMDhp422VnnzoSy7La9xk5KYr6cgNtSxZBckkAeB5STllEt30rgIlW0Ins8rB5QV4ZAWbZBwpmlDmbSDq6RX90ID96tX6WinGe9XgFtig5gX9x1GRd2EIgLujuugBK5sq78jDAimuZARipm5ZA7IkTyqdbrRAhBNQSAeyruSIs3rZAbBtWys3Mg"

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
    alternatePhoto

  }
  console.log(user)
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default Provider;