import { app } from "./firebaseApp";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInAnonymously,
  createUserWithEmailAndPassword,
  updateProfile,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

const auth = getAuth();
setPersistence(auth, browserLocalPersistence);

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    return Promise.reject(error);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    return Promise.reject(error);
  }
};

const signUpWithEmailAndPassword = async (email, password) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    return Promise.reject(error);
  }
};

const signInAsGuest = async () => {
  try {
    const result = await signInAnonymously(auth);
    return result.user;
  } catch (error) {
    return Promise.reject(error);
  }
};

const updateDisplayName = async (user, displayName) => {
  try {
    updateProfile(user, { displayName: displayName });
  } catch (error) {
    return Promise.reject(error);
  }
};

const signOutofApp = async () => {
  try {
    signOut(auth);
  } catch (error) {
    return Promise.reject(error);
  }
};

const watchUser = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return true;
    } else {
      return false;
    }
  });
};

const getCurrentUser = () => {
  const user = auth.currentUser;
  return user;
};

export {
  signInWithGoogle,
  signInAsGuest,
  logInWithEmailAndPassword,
  signUpWithEmailAndPassword,
  signOutofApp,
  watchUser,
  getCurrentUser,
  updateDisplayName,
};
