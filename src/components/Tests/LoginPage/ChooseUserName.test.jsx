import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import ChooseUserName from "../../LoginPage/ChooseUserName";
import { UserNameContext } from "../../../contexts/UserNameContext";

import { BrowserRouter } from "react-router-dom";

import { auth } from "../../../firebaseFunctions/firebaseAuth.js";
import { createUserName } from "../../../firebaseFunctions/firebaseStore.js";

afterEach(cleanup);

jest.mock("..//..//..//firebaseFunctions/firebaseAuth.js", () => ({
  auth: { currentUser: true },
}));

jest.mock("..//..//..//firebaseFunctions/firebaseStore.js");

describe("Setting userName", () => {
  test("Sets username if created succesfully", async () => {
    const setUserName = jest.fn(() => {
      return;
    });

    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <UserNameContext.Provider value={{ setUserName }}>
          <ChooseUserName />
        </UserNameContext.Provider>
      </BrowserRouter>
    );

    const setNamebutton = screen.getByRole("button", { name: /set name/i });
    await user.type(screen.getByRole("textbox"), "abc");
    await user.click(setNamebutton);

    expect(setUserName).toBeCalled();
  });

  test("Displays correct error if input is empty", async () => {
    const setUserName = jest.fn(() => {
      return;
    });

    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <UserNameContext.Provider value={{ setUserName }}>
          <ChooseUserName />
        </UserNameContext.Provider>
      </BrowserRouter>
    );

    const setNamebutton = screen.getByRole("button", { name: /set name/i });
    await user.click(setNamebutton);
    expect(screen.getByText(/user name is required\./i)).toBeInTheDocument();
  });

  test("Displays error if user is invalid", async () => {
    auth.currentUser = false;

    const setUserName = jest.fn(() => {
      return;
    });

    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <UserNameContext.Provider value={{ setUserName }}>
          <ChooseUserName />
        </UserNameContext.Provider>
      </BrowserRouter>
    );

    const setNamebutton = screen.getByRole("button", { name: /set name/i });
    await user.type(screen.getByRole("textbox"), "abc");
    await user.click(setNamebutton);
    expect(screen.getByText(/User not valid/i)).toBeInTheDocument();
  });

  test("Displays error if createUserName fails", async () => {
    createUserName.mockImplementationOnce(() => {
      throw Error("abc");
    });

    const setUserName = jest.fn(() => {
      return;
    });

    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <UserNameContext.Provider value={{ setUserName }}>
          <ChooseUserName />
        </UserNameContext.Provider>
      </BrowserRouter>
    );

    const setNamebutton = screen.getByRole("button", { name: /set name/i });
    await user.type(screen.getByRole("textbox"), "abc");
    await user.click(setNamebutton);
    expect(screen.queryByLabelText("")).not.toBeInTheDocument();
  });
});
