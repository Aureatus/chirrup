import { useState, useEffect } from "react";
import { fetchUserName } from "../firebaseFunctions/firebaseStore";

const useFetchUserName = (user, loading, error) => {
  const [userName, setUserName] = useState(null);
  const [userNameLoading, setUserNameLoading] = useState(true);

  useEffect(() => {
    if (!loading && user) {
      (async () => {
        try {
          const uid = user.uid;
          const currentUserName = await fetchUserName(uid);
          setUserName(currentUserName);
        } catch (error) {
          console.log(error.message);
        } finally {
          setUserNameLoading(false);
        }
      })();
    }
  }, [user, loading]);

  return [userName, setUserName, userNameLoading];
};

export default useFetchUserName;
