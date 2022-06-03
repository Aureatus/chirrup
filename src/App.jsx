import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "./components/themes";
import { GlobalStyles } from "./components/GlobalStyles";

import LoginPage from "./components/LoginPage";

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
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
