import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import LoginPage from "../../LoginPage/LoginPage";
import { UserNameContext } from "../../../contexts/UserNameContext";

import { BrowserRouter } from "react-router-dom";

import { auth } from "../../../firebaseFunctions/firebaseAuth.js";
import { createUserName } from "../../../firebaseFunctions/firebaseStore.js";
import { signInAnonymously } from "firebase/auth";

afterEach(cleanup);

window.alert = jest.fn();

jest.mock("..//..//..//firebaseFunctions/firebaseAuth.js", () => ({
  auth: { currentUser: false },
}));

jest.mock("..//..//..//firebaseFunctions/firebaseStore.js");

jest.mock("firebase/auth");
describe("Sign up/in buttons function correctly", () => {
  test("Sign in button navigates to /sign-in", async () => {
    const setUserName = jest.fn(() => {
      return;
    });

    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <UserNameContext.Provider value={{ setUserName }}>
          <LoginPage />
        </UserNameContext.Provider>
      </BrowserRouter>
    );

    const signInButton = screen.getByRole("link", { name: /sign in/i });
    await user.click(signInButton);
    expect(window.location.href).toContain("/sign-in");
  });

  test("Sign up button navigates to /sign-up", async () => {
    const setUserName = jest.fn(() => {
      return;
    });

    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <UserNameContext.Provider value={{ setUserName }}>
          <LoginPage />
        </UserNameContext.Provider>
      </BrowserRouter>
    );

    const signInButton = screen.getByRole("link", { name: /sign up/i });
    await user.click(signInButton);
    expect(window.location.href).toContain("/sign-up");
  });

  test("Guest sign in signs in anonymously and creates username", async () => {
    const setUserName = jest.fn(() => {
      return;
    });

    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <UserNameContext.Provider value={{ setUserName }}>
          <LoginPage />
        </UserNameContext.Provider>
      </BrowserRouter>
    );

    const guestSignInButton = screen.getByRole("button", {
      name: /guest sign in/i,
    });

    signInAnonymously.mockImplementationOnce(() => {
      return { user: { uid: 10 } };
    });

    await user.click(guestSignInButton);
    expect(signInAnonymously).toBeCalled();
    expect(createUserName).toBeCalledWith(10, "Guest");
    expect(setUserName).toBeCalledWith("Guest");
  });

  test("Guest sign in handles error correctly", async () => {
    const setUserName = jest.fn(() => {
      return;
    });

    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <UserNameContext.Provider value={{ setUserName }}>
          <LoginPage />
        </UserNameContext.Provider>
      </BrowserRouter>
    );

    const guestSignInButton = screen.getByRole("button", {
      name: /guest sign in/i,
    });

    signInAnonymously.mockImplementationOnce(() => {
      throw Error("test");
    });

    await user.click(guestSignInButton);
    expect(window.alert).toBeCalledWith("test");
  });
});
