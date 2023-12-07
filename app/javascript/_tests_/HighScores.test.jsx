import React from "react";
import { render, screen } from "@testing-library/react";
import { HighScores } from "../components/HighScores";
import { scoreHelper } from "../utils/scoreHelper"

jest.mock("../utils/scoreHelper", () => ({
  scoreHelper: jest.fn(),
}));

const mockScores = [
        {name: "Jane", time:1700},
        {name: "John", time:1900},
        {name: "Steve", time: 2200},
        ]

describe("HighScores component", () => {
  test("renders correctly when no bestTime", () => {
    scoreHelper.mockReturnValueOnce({
      scores: mockScores,
      updated: null,
      postScore: jest.fn(),
    })

    render(<HighScores time={3000} />)
    const trElements = screen.getAllByRole('row');
    expect(screen.getByText(/Can you make it into the Top 10/i)).not.toBeNull();
    expect(trElements[1].textContent).toEqual("1.Jane00:01:70")
    expect(trElements[2].textContent).toEqual("2.John00:01:90");
    expect(trElements[3].textContent).toEqual("3.Steve00:02:20");
  })

  test("renders correctly when user's time is bestTime", () => {
    scoreHelper.mockReturnValueOnce({
      scores: mockScores,
      updated: null,
      postScore: jest.fn(),
    })

    render(<HighScores time={2000} />)
    
    expect(screen.getByText(/You made the Top 10/i)).not.toBeNull();
    expect(screen.getByRole("button", { name: /Record Score/i })).not.toBeNull();
  })

  test("renders correctly when user's bestTime is saved", () => {
    scoreHelper.mockReturnValueOnce({
      scores: mockScores,
      updated: true,
      postScore: jest.fn(),
    })

    render(<HighScores time={2000} />)
    
    expect(screen.getByText(/Your score has been saved/i)).not.toBeNull();
  })
})