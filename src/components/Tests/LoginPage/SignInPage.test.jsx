import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import SignInPage from "../../LoginPage/SignInPage";

import { UserNameContext } from "../../../contexts/UserNameContext";

import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../../firebaseFunctions/firebaseAuth.js";

import { fetchUserName } from "../../../firebaseFunctions/firebaseStore";

afterEach(cleanup);

jest.mock("..//..//..//firebaseFunctions/firebaseAuth.js", () => ({
  auth: { currentUser: true },
}));

jest.mock("../../../firebaseFunctions/firebaseStore");

jest.mock("firebase/auth");

describe("Signing in functions correctly", () => {
  test("Sign in with Google", async () => {
    signInWithPopup.mockImplementationOnce(() => {
      return { user: { uid: 10 } };
    });
    fetchUserName.mockImplementationOnce(() => {
      return "testUserName";
    });

    const setUserName = jest.fn(() => {
      return;
    });

    const user = userEvent.setup();

    const history = createMemoryHistory();
    history.push("/sign-in");
    render(
      <Router location={history.location} navigator={history}>
        <UserNameContext.Provider value={{ setUserName }}>
          <SignInPage />
        </UserNameContext.Provider>
      </Router>
    );

    const signInWithGoogleButton = screen.getByRole("button", {
      name: /sign in with google/i,
    });

    await user.click(signInWithGoogleButton);

    expect(signInWithPopup).toBeCalledWith({ currentUser: true }, undefined);
    expect(fetchUserName).toBeCalledWith(10);
  });

  test("Sign in with email", async () => {
    signInWithEmailAndPassword.mockImplementationOnce(() => {
      return { user: { uid: 10 } };
    });
    fetchUserName.mockImplementationOnce(() => {
      return "testUserName";
    });

    const setUserName = jest.fn(() => {
      return;
    });

    const user = userEvent.setup();

    const history = createMemoryHistory();
    history.push("/sign-in");

    render(
      <Router location={history.location} navigator={history}>
        <UserNameContext.Provider value={{ setUserName }}>
          <SignInPage />
        </UserNameContext.Provider>
      </Router>
    );

    const emailInput = screen.getByPlaceholderText(/Email address/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const LoginButton = screen.getByRole("button", { name: /log in/i });

    await user.type(emailInput, "test@gmail.com");
    await user.type(passwordInput, "testPassword");

    await user.click(LoginButton);

    expect(signInWithEmailAndPassword).toBeCalledWith(
      { currentUser: true },
      "test@gmail.com",
      "testPassword"
    );
    expect(fetchUserName).toBeCalledWith(10);
  });
});

describe("Errors handled correctly", () => {
  test("Sign in with google Navigates to choose-user-name if no userName found", async () => {
    signInWithPopup.mockImplementationOnce(() => {
      return { user: { uid: 10 } };
    });
    fetchUserName.mockImplementationOnce(() => {
      throw Error("Please sign up before signing in.");
    });

    const setUserName = jest.fn(() => {
      return;
    });

    const user = userEvent.setup();

    const history = createMemoryHistory();
    history.push("/sign-in");

    render(
      <Router location={history.location} navigator={history}>
        <UserNameContext.Provider value={{ setUserName }}>
          <SignInPage />
        </UserNameContext.Provider>
      </Router>
    );

    const signInWithGoogleButton = screen.getByRole("button", {
      name: /sign in with google/i,
    });

    await user.click(signInWithGoogleButton);

    expect(history.location.pathname).toEqual("/choose-user-name");
  });

  test("Sign in with google displays error", async () => {
    signInWithPopup.mockImplementationOnce(() => {
      throw Error("test");
    });
    fetchUserName.mockImplementationOnce(() => {
      return "testUserName";
    });

    const setUserName = jest.fn(() => {
      return;
    });

    const user = userEvent.setup();

    const history = createMemoryHistory();
    history.push("/sign-in");

    render(
      <Router location={history.location} navigator={history}>
        <UserNameContext.Provider value={{ setUserName }}>
          <SignInPage />
        </UserNameContext.Provider>
      </Router>
    );

    const signInWithGoogleButton = screen.getByRole("button", {
      name: /sign in with google/i,
    });

    await user.click(signInWithGoogleButton);

    expect(history.location.pathname).toEqual("/sign-in");
    expect(screen.getByText("test")).toBeInTheDocument();
  });

  test("Sign in with invalid inputs displays correct error", async () => {
    signInWithEmailAndPassword.mockImplementationOnce(() => {
      return { user: { uid: 10 } };
    });
    fetchUserName.mockImplementationOnce(() => {
      return "testUserName";
    });

    const setUserName = jest.fn(() => {
      return;
    });

    const user = userEvent.setup();

    const history = createMemoryHistory();
    history.push("/sign-in");

    render(
      <Router location={history.location} navigator={history}>
        <UserNameContext.Provider value={{ setUserName }}>
          <SignInPage />
        </UserNameContext.Provider>
      </Router>
    );

    const LoginButton = screen.getByRole("button", { name: /log in/i });
    await user.click(LoginButton);
    expect(
      screen.getByText("Email and password must be filled in.")
    ).toBeInTheDocument();
  });

  test("Sign in with email navigates to choose-user-name if userName not found", async () => {
    signInWithEmailAndPassword.mockImplementationOnce(() => {
      return { user: { uid: 10 } };
    });
    fetchUserName.mockImplementationOnce(() => {
      throw Error("test");
    });

    const setUserName = jest.fn(() => {
      return;
    });

    const user = userEvent.setup();

    const history = createMemoryHistory();
    history.push("/sign-in");

    render(
      <Router location={history.location} navigator={history}>
        <UserNameContext.Provider value={{ setUserName }}>
          <SignInPage />
        </UserNameContext.Provider>
      </Router>
    );

    const emailInput = screen.getByPlaceholderText(/Email address/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const LoginButton = screen.getByRole("button", { name: /log in/i });

    await user.type(emailInput, "test@gmail.com");
    await user.type(passwordInput, "testPassword");

    await user.click(LoginButton);
    expect(history.location.pathname).toEqual("/choose-user-name");
  });

  test("Sign in with email resets inputs and sets Error Message if user not found", async () => {
    const error = new Error("test");
    error.code = "auth/user-not-found";
    signInWithEmailAndPassword.mockImplementationOnce(() => {
      throw error;
    });
    fetchUserName.mockImplementationOnce(() => {
      return "testUserName";
    });

    const setUserName = jest.fn(() => {
      return;
    });

    const user = userEvent.setup();

    const history = createMemoryHistory();
    history.push("/sign-in");

    render(
      <Router location={history.location} navigator={history}>
        <UserNameContext.Provider value={{ setUserName }}>
          <SignInPage />
        </UserNameContext.Provider>
      </Router>
    );

    const emailInput = screen.getByPlaceholderText(/Email address/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const LoginButton = screen.getByRole("button", { name: /log in/i });

    await user.type(emailInput, "test@gmail.com");
    await user.type(passwordInput, "testPassword");

    await user.click(LoginButton);
    expect(history.location.pathname).toEqual("/sign-in");
    expect(emailInput.value).toEqual("");
    expect(passwordInput.value).toEqual("");
  });
});
