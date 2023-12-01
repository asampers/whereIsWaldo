import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EndScreen } from "../components/EndScreen";

jest.mock('react', () => {
  const ActualReact = jest.requireActual('react')
  return {
    ...ActualReact,
    useContext: () => ("dispatch" ), 
  }
})

describe("EndScreen component", () => {
  const mockStart = jest.fn();

  test("EndScreen", async () => {
    render(
    <EndScreen time={1700} startGame={mockStart} />
    );

    expect(screen.getByText("You Did It!")).not.toBeNull()
  });
});
