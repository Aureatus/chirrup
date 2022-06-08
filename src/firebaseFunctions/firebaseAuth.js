import { app } from "./firebaseApp";

import {
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

const auth = getAuth();
setPersistence(auth, browserLocalPersistence);

export { auth, provider };
