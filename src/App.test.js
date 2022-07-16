import { render, screen } from "@testing-library/react";
import App from "./App";
import Login from "./components/Login/Login";

test("renders learn react link", () => {
  render(<Login />);
  const linkElement = screen.getByPlaceholderText(/username/i);
  expect(linkElement).toBeInTheDocument();
});

// test("renders 3 elemnts in react js", () => {
//   render(<App />);
//   const listElement = screen.getAllByRole("listitem");
//   // expect(listElement).toHaveLength(3);
//   expect(listElement.length).toBe(3); //toEqual(3)
// });

// test("renders title", () => {
//   render(<App />);
//   const title = screen.getByTestId("mytestid");
//   // expect(listElement).toHaveLength(3);
//   expect(title).toBeInTheDocument(); //toEqual(3)
// });

// test("Somme", () => {
//   render(<App />);
//   const sum = screen.getByTitle("sum");
//   // expect(listElement).toHaveLength(3);
//   expect(sum.textContent).toBe("7"); //toEqual(3)
// });
