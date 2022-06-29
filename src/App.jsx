import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "./components/themes";
import { GlobalStyles } from "./components/GlobalStyles";

import LoginPage from "./components/LoginPage/LoginPage";
import SignInPage from "./components/LoginPage/SignInPage";
import SignUpPage from "./components/LoginPage/SignUpPage";
import ChooseUserName from "./components/LoginPage/ChooseUserName";

import { UserContext } from "./contexts/UserContext";
import { UserNameContext } from "./contexts/UserNameContext";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebaseFunctions/firebaseAuth";
import useFetchUserName from "./hooks/useFetchUserName";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import ApplicationPage from "./components/ApplicationPage/ApplicationPage";
import NavSidebar from "./components/ApplicationPage/NavSidebar/NavSidebar";

function App() {
  const [user, loading, error] = useAuthState(auth);
  const [userName, setUserName, userNameLoading, setUserNameLoading] =
    useFetchUserName(user, loading, error);
  const [theme, setTheme] = useState("light");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user === null) setUserName(null);
  }, [user, setUserName]);

  useEffect(() => {
    if (loading) navigate("/loading");
  }, [loading, navigate]);

  useEffect(() => {
    if (user && userName) navigate("/");

    if (user && !userName && !userNameLoading) navigate("/choose-user-name");
  }, [user, userName, loading, userNameLoading, navigate]);

  useEffect(() => {
    if (
      !user &&
      !userName &&
      !loading &&
      (location.pathname === "/" || location.pathname === "/loading")
    ) {
      navigate("/login");
    }
  }, [user, userName, loading, location.pathname, navigate]);

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  if (!user || (!userName && user.isAnonymous !== true)) {
    return (
      <UserContext.Provider value={{ user }}>
        <UserNameContext.Provider value={{ userName, setUserName }}>
          <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Routes>
              <Route index element={<Navigate to={"/login"} />} />
              <Route path="/loading" element={<LoadingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/sign-in"
                element={<SignInPage setUserName={setUserName} />}
              />
              <Route path="/sign-up" element={<SignUpPage />} />
              <Route
                path="/choose-user-name"
                element={<ChooseUserName setUserName={setUserName} />}
              />
            </Routes>
          </ThemeProvider>
        </UserNameContext.Provider>
      </UserContext.Provider>
    );
  }
  if (user && userName) {
    return (
      <UserContext.Provider value={{ user }}>
        <UserNameContext.Provider value={{ userName }}>
          <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <ApplicationPage>
              <NavSidebar />
            </ApplicationPage>
          </ThemeProvider>
        </UserNameContext.Provider>
      </UserContext.Provider>
    );
  }
}

export default App;
