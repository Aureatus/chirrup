import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import { auth } from "../../../firebaseFunctions/firebaseAuth.js";

import { Router, Routes, Route } from "react-router-dom";
import { createMemoryHistory } from "history";

import { lightTheme, darkTheme } from "..//..//themes";

import { ThemeProvider } from "styled-components";

import LogoutPage from "..//..//LogoutPage/LogoutPage";

import { signOut } from "firebase/auth";

afterEach(cleanup);

jest.mock("..//..//..//firebaseFunctions/firebaseAuth.js", () => ({
  auth: { currentUser: false },
}));

jest.mock("..//..//..//firebaseFunctions/firebaseStore.js");

jest.mock("firebase/auth");

describe("Log out component functions correctly", () => {
  const theme = "light";
  test("Logout button calls functions correctly on click", async () => {
    const history = createMemoryHistory();
    history.push("/logout");

    const user = userEvent.setup();

    const setLogoutClicked = jest.fn(() => {
      return;
    });

    signOut.mockImplementationOnce(() => {
      return;
    });

    const pastPathname = { current: "/home" };

    render(
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Router location={history.location} navigator={history}>
          <Routes>
            <Route
              path="/logout"
              element={
                <LogoutPage
                  setLogoutClicked={setLogoutClicked}
                  pastPathname={pastPathname}
                />
              }
            />
          </Routes>
        </Router>
      </ThemeProvider>
    );

    const logOutButton = screen.getByRole("link", { name: /log out/i });

    await user.click(logOutButton);
    expect(history.location.pathname).toEqual("/");
    expect(setLogoutClicked).toBeCalledWith(false);
    expect(signOut).toBeCalledWith(auth);
  });

  test("Logout button logs error if it occurs and brings user back to home page", async () => {
    window.console.log = jest.fn();
    const history = createMemoryHistory();
    history.push("/logout");

    const user = userEvent.setup();

    const setLogoutClicked = jest.fn(() => {
      return;
    });

    signOut.mockImplementationOnce(() => {
      throw Error;
    });

    const pastPathname = { current: "/home" };

    render(
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Router location={history.location} navigator={history}>
          <Routes>
            <Route
              path="/logout"
              element={
                <LogoutPage
                  setLogoutClicked={setLogoutClicked}
                  pastPathname={pastPathname}
                />
              }
            />
          </Routes>
        </Router>
      </ThemeProvider>
    );

    const logOutButton = screen.getByRole("link", { name: /log out/i });

    await user.click(logOutButton);
    expect(history.location.pathname).toEqual("/");
    expect(setLogoutClicked).toBeCalledWith(false);
    expect(console.log).toBeCalledWith(Error);
  });

  test("Cancel button navigates to last location and resets LogoutClicked", async () => {
    const history = createMemoryHistory();
    history.push("/logout");

    const user = userEvent.setup();

    const setLogoutClicked = jest.fn(() => {
      return;
    });

    const pastPathname = { current: "/home" };

    render(
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Router location={history.location} navigator={history}>
          <Routes>
            <Route
              path="/logout"
              element={
                <LogoutPage
                  setLogoutClicked={setLogoutClicked}
                  pastPathname={pastPathname}
                />
              }
            />
          </Routes>
        </Router>
      </ThemeProvider>
    );

    const cancelButton = screen.getByRole("link", { name: /cancel/i });

    await user.click(cancelButton);
    expect(history.location.pathname).toEqual(pastPathname.current);
    expect(setLogoutClicked).toBeCalledWith(false);
  });
});
