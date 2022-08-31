import { firebase } from "./config";
import {
  getAuth,
  // email and password
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // reset password
  sendPasswordResetEmail,
  // watch user signed in and signed out
  onAuthStateChanged,
  // signed in action
  signInWithPopup,
  signOut,
  // oAUth
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider,
} from "firebase/auth";

const auth = getAuth(firebase);

const appleProvider = new OAuthProvider("apple.com");
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const signOutUser = () => {
  signOut().then(() => {
    console.log("user signed out");
  });
};

export const passwordEmail = (email) =>
  sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log("passwrod reset email sent.");
    })
    .catch((error) => {
      console.log(error);
    });

export const registerEmail = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });

export const signInEmail = (email, password) =>
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("user info", user);
    })
    .catch((error) => {
      console.log(error);
    });

export const watchAuthChange = () =>
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // when user is signed in
      console.log(user);
    } else {
      // user is signed out
      console.log("user is signed out");
    }
  });

export const popupGoogleSignIn = () =>
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      console.log("result credential", credential);
      const token = credential.accessToken;
      console.log("token", token);
      // user info
      const user = result.user;
      console.log("user info", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      console.log(
        "error log",
        `
          code: ${errorCode}.
          mess: ${errorMessage}.
          error email: ${email}.
        `
      );
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log("error credential", credential);
    });

export const popupFacebookSignIn = () =>
  signInWithPopup(auth, facebookProvider)
    .then((result) => {
      const credential = FacebookAuthProvider.credentialFromResult(result);
      console.log("result credential", credential);
      const token = credential.accessToken;
      console.log("token", token);
      // user info
      const user = result.user;
      console.log("user info", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      console.log(
        "error log",
        `
          code: ${errorCode}.
          mess: ${errorMessage}.
          error email: ${email}.
        `
      );
      const credential = FacebookAuthProvider.credentialFromError(error);
      console.log("error credential", credential);
    });

export const popupAppleSignIn = () =>
  signInWithPopup(auth, appleProvider)
    .then((result) => {
      const credential = OAuthProvider.credentialFromResult(result);
      console.log("result credential", credential);
      const token = credential.accessToken;
      console.log("token", token);
      // user info
      const user = result.user;
      console.log("user info", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      console.log(
        "error log",
        `
          code: ${errorCode}.
          mess: ${errorMessage}.
          error email: ${email}.
        `
      );
      const credential = OAuthProvider.credentialFromError(error);
      console.log("error credential", credential);
    });
