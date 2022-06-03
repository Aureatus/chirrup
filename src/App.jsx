import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "./components/themes";
import { GlobalStyles } from "./components/GlobalStyles";

import LoginPage from "./components/LoginPage";
import SignInPage from "./components/SignInPage";

function App() {
  const [user, setUser] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  if (!user) {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace={true} />} />
            <Route path="/login" element={<LoginPage setUser={setUser} />} />
            <Route path="/sign-in" element={<SignInPage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
  return <div></div>;
}

export default App;
