import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EndScreen } from "../components/EndScreen";
import '@testing-library/jest-dom';

window.scrollTo = jest.fn();

jest.mock('react', () => {
  const dispatch = jest.fn()
  const ActualReact = jest.requireActual('react')
  return {
    ...ActualReact,
    useContext: () => (dispatch),
  }
})

jest.mock('react-router-dom', () => {
  const ActualReact = jest.requireActual('react-router-dom')
  return {
    ...ActualReact,
    Link: () => ("Link to Go Home") 
  }
})

jest.mock("../components/HighScores", () => ({
  HighScores: () => {
    return <div data-testid="mock-HighScores" />;
  },
}));

describe("EndScreen component", () => {
  const user = userEvent.setup();
  const mockStart = jest.fn();

  test("renders correctly", async () => {
    render(<EndScreen time={1700} startGame={mockStart} />);

    expect(screen.getByText("You Did It!")).not.toBeNull()
    expect(screen.getByText(/Your time was 00:01:70./i)).not.toBeNull()
  });

  test("Play Again btn calls mockStart", async () => {
    render(<EndScreen time={1700} startGame={mockStart} />);

    await user.click(screen.getByRole("button", { name: /Play Again/i}));
    expect(mockStart).toHaveBeenCalledTimes(1);
  });
});
