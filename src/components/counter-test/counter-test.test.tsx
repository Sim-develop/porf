/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Counter from "./counter-test";
describe("counter-test", () => {
  it("renders a heading", () => {
    render(<Counter initialCount={1} />);
    const countValue = screen.getByTestId("count").textContent;
    expect(Number(countValue)).toEqual(1);
  });
});

// describe("counter-test", () => {
//   it("renders a heading", () => {
//     render(<Counter initialCount={0} />);

//     const heading = screen.getByRole("heading", {
//       name: /count:/i,
//     });
//     expect(heading).toBeInTheDocument();
//   });

//   it("increments the count", () => {
//     render(<Counter initialCount={0} />);

//     const incrementButton = screen.getByText("Increment");
//     fireEvent.click(incrementButton);

//     const count = screen.getByTestId("count");
//     expect(count).toHaveTextContent("1");
//   });

//   it("decrements the count", () => {
//     render(<Counter initialCount={1} />);

//     const decrementButton = screen.getByText("Decrement");
//     fireEvent.click(decrementButton);

//     const count = screen.getByTestId("count");
//     expect(count).toHaveTextContent("0");
//   });

//   it("restarts the count", () => {
//     render(<Counter initialCount={5} />);

//     const restartButton = screen.getByText("Restart");
//     fireEvent.click(restartButton);

//     const count = screen.getByTestId("count");
//     expect(count).toHaveTextContent("5");
//   });

//   it("switches the sign of the count", () => {
//     render(<Counter initialCount={5} />);

//     const switchSignsButton = screen.getByText("Switch Signs");
//     fireEvent.click(switchSignsButton);

//     const count = screen.getByTestId("count");
//     expect(count).toHaveTextContent("-5");
//   });
// });
