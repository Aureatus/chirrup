import { useState, useEffect } from "react";
import { fetchUserName } from "../firebaseFunctions/firebaseStore";

const useFetchUserName = (user) => {
  const [userName, setUserName] = useState(null);
  const [userNameLoading, setUserNameLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const uid = user?.uid;
        if (uid) {
          const currentUserName = await fetchUserName(uid);
          setUserName(currentUserName);
        }
      } catch (error) {
        setUserName(null);
      } finally {
        setUserNameLoading(false);
      }
    })();
  }, [user]);

  return [userName, setUserName, userNameLoading];
};

export default useFetchUserName;
