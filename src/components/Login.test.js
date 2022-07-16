import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Login from "./Login/Login";

jest.mock("axios", () => ({
  __esModule: true,

  default: {
    get: () => ({
      data: { id: 1, name: "Reda" },
    }),
  },
}));

test("username input should be rendered", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl).toBeInTheDocument();
});

test("password input should be rendered", () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl).toBeInTheDocument();
});

test("Button login should be rendered", () => {
  render(<Login />);
  const buttonEl = screen.getByRole(/button/i);
  expect(buttonEl).toBeInTheDocument();
});

test("username input should be empty", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  const testValue = "test";
  fireEvent.change(userInputEl, { target: { value: testValue } });
  expect(userInputEl.value).toBe(testValue);
});

test("password should be empty", () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const testValue = "test";
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  expect(passwordInputEl.value).toBe(testValue);
});

test("Button login should be disabled", () => {
  render(<Login />);
  const buttonEl = screen.getByRole(/button/i);
  expect(buttonEl).toBeDisabled();
});

test("Loading should not be rendered", () => {
  render(<Login />);
  const buttonEl = screen.getByRole(/button/i);
  expect(buttonEl).not.toHaveTextContent(/Waiting/i);
});

test("Error message should not be visible", () => {
  render(<Login />);
  const errorMessage = screen.getByTestId("error");
  expect(errorMessage).not.toBeVisible();
});

test("Button should not be disabled when input exists", () => {
  render(<Login />);
  const buttonEl = screen.getByRole(/button/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  const testValue = "test";
  fireEvent.change(userInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  expect(buttonEl).not.toBeDisabled();
});

test("Loading should  be rendered when click", () => {
  render(<Login />);
  const buttonEl = screen.getByRole(/button/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  const testValue = "test";
  fireEvent.change(userInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/Waiting/i);
});
test("Loading should not be rendered after fetching", async () => {
  render(<Login />);
  const buttonEl = screen.getByRole(/button/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  const testValue = "test";
  fireEvent.change(userInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);
  await waitFor(() => expect(buttonEl).not.toHaveTextContent(/Waiting/i));
});

test("user should be rendered after fetching", async () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  const userItem = await screen.findByText("Reda");

  expect(userItem).toBeInTheDocument();
});
