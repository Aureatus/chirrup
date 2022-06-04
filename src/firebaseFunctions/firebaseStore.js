import { app } from "./firebaseApp";

import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(app);

const fetchUserName = async (uid) => {
  const docRef = doc(db, "userNames", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return Promise.reject(new Error("Please sign up before signing in."));
  }
};

export { fetchUserName };
