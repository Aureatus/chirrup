import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "./components/themes";
import { GlobalStyles } from "./components/GlobalStyles";

import LoginPage from "./components/LoginPage/LoginPage";
import SignInPage from "./components/LoginPage/SignInPage";
import SignUpPage from "./components/LoginPage/SignUpPage";
import ChooseUserName from "./components/LoginPage/ChooseUserName";

function App() {
  const [user, setUser] = useState(false);
  const [theme, setTheme] = useState("light");
  const [userName, setUserName] = useState("");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  if (!user || !userName) {
    return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace={true} />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route
            path="/sign-in"
            element={<SignInPage setUser={setUser} setUserName={setUserName} />}
          />
          <Route
            path="/sign-up"
            element={<SignUpPage setUser={setUser} setUserName={setUserName} />}
          />
          <Route
            path="/choose-user-name"
            element={
              <ChooseUserName setUser={setUser} setUserName={setUserName} />
            }
          />
        </Routes>
      </ThemeProvider>
    );
  }
  if (user) {
    return <div></div>;
  }
}

export default App;
