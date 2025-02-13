/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { Counter } from "./index";

describe("counter-test", () => {
  it("renders a heading", () => {
    const { getByTestId } = render(<Counter initialCount={1} />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(1);
  });

  it("count should increment by 1 if the increment button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const incrementButton = getByRole("button", { name: /Increment/i });
    const countValueBefore = Number(getByTestId("count").textContent);
    expect(countValueBefore).toEqual(0);
    fireEvent.click(incrementButton);
    const countValueAfter = Number(getByTestId("count").textContent);
    expect(countValueAfter).toEqual(1);
  });

  it("count should decrement by 1 if the decrement button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={1} />);
    const decrementButton = getByRole("button", { name: /Decrement/i });
    const countValueBefore = Number(getByTestId("count").textContent);
    expect(countValueBefore).toEqual(1);
    fireEvent.click(decrementButton);
    const countValueAfter = Number(getByTestId("count").textContent);
    expect(countValueAfter).toEqual(0);
  });

  it("count should restart to initial value if the restart button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={5} />);
    const restartButton = getByRole("button", { name: /Restart/i });
    fireEvent.click(restartButton);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(5);
  });

  it("count should switch signs if the switch signs button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={5} />);
    const switchSignsButton = getByRole("button", { name: /Switch Signs/i });
    fireEvent.click(switchSignsButton);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(-5);
  });
});
