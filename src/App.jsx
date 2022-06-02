import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";

function App() {
  const [theme, setTheme] = useState(`light`);
  return (
    <ThemeProvider theme={theme === `light` ? lightTheme : darkTheme}>
      <div></div>
    </ThemeProvider>
  );
}

export default App;
