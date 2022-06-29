import { useNavigate } from "react-router-dom";
import { useRef, useEffect, useCallback } from "react";
const useNav = () => {
  const navigate = useNavigate();
  const navigateRef = useRef({ navigate });
  useEffect(() => {
    navigateRef.current.navigate = navigate;
  }, [navigate]);
  return useCallback((location) => {
    navigateRef.current.navigate(location);
  }, []);
};

export default useNav;
