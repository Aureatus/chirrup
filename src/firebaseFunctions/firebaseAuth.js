import { app } from "./firebaseApp";

import {
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
  signOut,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

const auth = getAuth();
setPersistence(auth, browserLocalPersistence);

const signUserOut = async (setUserName, setUserNameLoading) => {
  await signOut(auth);
  setUserName(null);
  setUserNameLoading(true);
};

export { auth, provider, signUserOut };
