import React from "react";
import { render, screen } from "@testing-library/react";
import { Timer } from "../components/Timer";
import { act } from "react-dom/test-utils";

describe("Timer", () => {
  test("it setsFinalTime when game ends", () => {
    const mockSetFinalTime = jest.fn();
    render(<Timer gameEnded={true} setFinalTime={mockSetFinalTime} />)
    expect(mockSetFinalTime).toHaveBeenCalledTimes(1);
  })

  test("it renders correctly", async () => {
    const mockSetFinalTime = jest.fn();
    jest.useFakeTimers();
    render(<Timer gameEnded={false} setFinalTime={mockSetFinalTime} />)
    act(() => {jest.advanceTimersByTime(1700)});
    expect(screen.getByText(/00:01:70/i)).not.toBeNull()
    act(() => {jest.advanceTimersByTime(1000)});
    expect(screen.getByText(/00:02:70/i)).not.toBeNull()
  })
})