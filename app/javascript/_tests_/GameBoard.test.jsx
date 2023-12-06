import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { GameBoard } from "../components/GameBoard";
import { FoundNamesProvider } from "../components/Context";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";

const characters = [
  {name: "Da Vinci", x:0.166, y:0.374}, 
  {name: "Kahlo", x:0.895, y:0.2925}, 
  {name: "Picasso", x:0.7875, y:0.944}, 
  {name: "Van Gogh", x:0.145, y:0.824}, 
  {name: "Warhol", x:0.0325, y:0.1625}
];

const mockEndGame = jest.fn();

let scrollIntoViewMock = jest.fn();
window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

describe("GameBoard component", () => {
  const user = userEvent.setup();

  const event = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
  });
  Object.defineProperty(event, 'offsetX', { value: 934 });
  Object.defineProperty(event, 'offsetY', { value: 530 });

  test("it renders correctly when user clicks img and finds character", async () => {
    render(
      <FoundNamesProvider>
        <GameBoard endGame={mockEndGame} characters={characters} />
      </FoundNamesProvider>
    )

    const gameImg = screen.getByRole('img')
    jest.spyOn(gameImg, 'clientHeight', 'get').mockImplementation(() => 1812);
    jest.spyOn(gameImg, 'clientWidth', 'get').mockImplementation(() => 1044);

    expect(screen.getByText(/who is it/i)).not.toBeVisible()
    
    fireEvent(gameImg, event);

    expect(screen.getByText(/who is it/i)).toBeVisible()

    await user.click(screen.getByText(/Kahlo/i));

    expect(screen.getByText(/who is it/i)).not.toBeVisible()
    expect(screen.getByText(/You found Kahlo/i)).toBeVisible()
    
    await user.click(gameImg)

    expect(screen.queryByText('Kahlo')).toBeNull()
    expect(screen.getAllByRole('listitem').length).toEqual(4)
  })

  test("it renders correctly when user clicks img and doesn't finds character", async () => {
    render(
      <FoundNamesProvider>
        <GameBoard endGame={mockEndGame} characters={characters} />
      </FoundNamesProvider>
    )

    const gameImg = screen.getByRole('img')

    expect(screen.getByText(/who is it/i)).not.toBeVisible()
    
    fireEvent(gameImg, event);

    expect(screen.getByText(/who is it/i)).toBeVisible()

    await user.click(screen.getByText(/Da Vinci/i));

    expect(screen.getByText(/who is it/i)).not.toBeVisible()
    expect(screen.getByText(/Ope, try again/i)).toBeVisible()
    
    await user.click(gameImg)

    expect(screen.queryByText('Da Vinci')).not.toBeNull()
    expect(screen.getAllByRole('listitem').length).toEqual(5)
  })
})