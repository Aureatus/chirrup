import { cleanup, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import SignUpPage from "../../LoginPage/SignUpPage";

import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../../firebaseFunctions/firebaseAuth.js";

import { fetchUserName } from "../../../firebaseFunctions/firebaseStore";

afterEach(cleanup);

jest.mock("..//..//..//firebaseFunctions/firebaseAuth.js", () => ({
  auth: { currentUser: true },
}));

jest.mock("../../../firebaseFunctions/firebaseStore");

jest.mock("firebase/auth");

describe("Signing up functions correctly", () => {
  test("Sign up with Google", async () => {
    signInWithPopup.mockImplementationOnce(() => {
      return { user: { uid: 10 } };
    });
    fetchUserName.mockImplementationOnce(() => {
      throw Error("Please sign up before signing in.");
    });

    const user = userEvent.setup();

    const history = createMemoryHistory();
    history.push("/sign-up");
    render(
      <Router location={history.location} navigator={history}>
        <SignUpPage />
      </Router>
    );

    const signUpWithGoogleButton = screen.getByRole("button", {
      name: /sign up with google/i,
    });

    await user.click(signUpWithGoogleButton);

    expect(signInWithPopup).toBeCalledWith({ currentUser: true }, undefined);
    expect(fetchUserName).toBeCalledWith(10);
    await waitFor(() =>
      expect(history.location.pathname).toEqual("/choose-user-name")
    );
  });

  test("Sign up with Email", async () => {
    createUserWithEmailAndPassword.mockImplementationOnce(() => {
      return;
    });

    const user = userEvent.setup();

    const history = createMemoryHistory();
    history.push("/sign-up");
    render(
      <Router location={history.location} navigator={history}>
        <SignUpPage />
      </Router>
    );

    const emailInput = screen.getByPlaceholderText(/Email address/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const LoginButton = screen.getByRole("button", { name: /next/i });

    await user.type(emailInput, "test@gmail.com");
    await user.type(passwordInput, "testPassword");

    await user.click(LoginButton);

    expect(createUserWithEmailAndPassword).toBeCalledWith(
      { currentUser: true },
      "test@gmail.com",
      "testPassword"
    );
    expect(history.location.pathname).toEqual("/choose-user-name");
  });
});

describe("Errors handled correctly", () => {
  test("Sign up with Google displays error if already signed up", async () => {
    signInWithPopup.mockImplementationOnce(() => {
      return { user: { uid: 10 } };
    });
    fetchUserName.mockImplementationOnce(() => {
      return "testUserName";
    });

    const user = userEvent.setup();

    const history = createMemoryHistory();
    history.push("/sign-up");
    render(
      <Router location={history.location} navigator={history}>
        <SignUpPage />
      </Router>
    );

    const signUpWithGoogleButton = screen.getByRole("button", {
      name: /sign up with google/i,
    });

    await user.click(signUpWithGoogleButton);

    expect(signInWithPopup).toBeCalledWith({ currentUser: true }, undefined);
    expect(fetchUserName).toBeCalledWith(10);
    expect(screen.getByText("Already signed up")).toBeInTheDocument();
  });

  test("Sign up with Google displays other errors", async () => {
    signInWithPopup.mockImplementationOnce(() => {
      return { user: { uid: 10 } };
    });
    fetchUserName.mockImplementationOnce(() => {
      throw Error("TestError");
    });

    const user = userEvent.setup();

    const history = createMemoryHistory();
    history.push("/sign-up");
    render(
      <Router location={history.location} navigator={history}>
        <SignUpPage />
      </Router>
    );

    const signUpWithGoogleButton = screen.getByRole("button", {
      name: /sign up with google/i,
    });

    await user.click(signUpWithGoogleButton);

    expect(signInWithPopup).toBeCalledWith({ currentUser: true }, undefined);
    expect(fetchUserName).toBeCalledWith(10);
    expect(screen.getByText("TestError")).toBeInTheDocument();
  });

  test("Sign up with Email displays error if inputs invalid", async () => {
    createUserWithEmailAndPassword.mockImplementationOnce(() => {
      return;
    });

    const user = userEvent.setup();

    const history = createMemoryHistory();
    history.push("/sign-up");
    render(
      <Router location={history.location} navigator={history}>
        <SignUpPage />
      </Router>
    );

    const LoginButton = screen.getByRole("button", { name: /next/i });

    await user.click(LoginButton);

    expect(
      screen.getByText("Email and password must be filled in.")
    ).toBeInTheDocument();
  });

  test("Sign up with Email displays unexpected errors", async () => {
    createUserWithEmailAndPassword.mockImplementationOnce(() => {
      throw Error("TestError");
    });

    const user = userEvent.setup();

    const history = createMemoryHistory();
    history.push("/sign-up");
    render(
      <Router location={history.location} navigator={history}>
        <SignUpPage />
      </Router>
    );

    const emailInput = screen.getByPlaceholderText(/Email address/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const LoginButton = screen.getByRole("button", { name: /next/i });

    await user.type(emailInput, "test@gmail.com");
    await user.type(passwordInput, "testPassword");

    await user.click(LoginButton);

    expect(screen.getByText("TestError")).toBeInTheDocument();
  });
});
