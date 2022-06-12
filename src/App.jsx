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

function App() {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(null);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  if (!user || (!userName && user.isAnonymous !== true)) {
    return (
      <UserContext.Provider value={{ user, setUser }}>
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
                element={
                  <SignInPage setUser={setUser} setUserName={setUserName} />
                }
              />
              <Route path="/sign-up" element={<SignUpPage />} />
              <Route
                path="/choose-user-name"
                element={
                  <ChooseUserName setUser={setUser} setUserName={setUserName} />
                }
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
