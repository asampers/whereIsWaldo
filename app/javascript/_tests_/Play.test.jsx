import React from 'react';
import { render, screen } from '@testing-library/react';
import { Play } from "../components/Play";

let scrollIntoViewMock = jest.fn();
window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom')),
    useNavigate: () => mockedUseNavigate,
}))

const mockCharacters = [
      {name: "Da Vinci", x:0.166, y:0.374}, 
      {name: "Kahlo", x:0.895, y:0.2925}, 
      {name: "Picasso", x:0.7875, y:0.944}, 
      {name: "Van Gogh", x:0.145, y:0.824}, 
      {name: "Warhol", x:0.0325, y:0.1625}
    ];

describe("Play", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  test('fetches character data', async () => {
    jest.spyOn(global, 'fetch').mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockCharacters),
      })
    );

    render(<Play />)

    await screen.findByText('Kahlo');

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('/api/v1/characters/index');
  })
})