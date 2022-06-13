import { useState, useEffect } from "react";
import { fetchUserName } from "../firebaseFunctions/firebaseStore";

const useFetchUserName = (user) => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const uid = user.uid;
        console.log(uid);
        if (uid) {
          const currentUserName = await fetchUserName(uid);
          setUserName(currentUserName);
        }
      } catch (error) {
        setUserName(null);
      }
    })();
  }, [user]);

  return [userName, setUserName];
};

export default useFetchUserName;
