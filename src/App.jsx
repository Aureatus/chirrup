import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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

function App() {
  const [user, loading, error] = useAuthState(auth);
  const [userName, setUserName] = useFetchUserName(user);
  const [theme, setTheme] = useState("light");

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
              <Route
                path="/"
                element={<Navigate to="/login" replace={true} />}
              />
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
  if (user) {
    return <div></div>;
  }
}

export default App;
