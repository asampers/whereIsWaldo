import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "../components/Header";
import { useFoundNames } from "../components/Context";
import '@testing-library/jest-dom';

jest.mock("../components/Context", () => ({
  useFoundNames: jest.fn(),
}));

const characters = [
  {name: "Da Vinci"},
  {name: "Kahlo"},
  {name: "Picasso"},
  {name: "Van Gogh"},
  {name: "Warhol"},
]
describe("Header component", () => {
  test("it renders correctly when 1 character is found", () => {
    useFoundNames.mockReturnValueOnce(["Kahlo"]);
    render(<Header characters={characters}/>);

    const kahloImg = screen.getAllByText(/Found/i)[1];
    const allOtherCharacterImgs = screen.getAllByText(/Found/i).filter((val, ind) => ind != 1);
    
    expect(kahloImg).toHaveStyle({visibility: 'visible'})
    expect(allOtherCharacterImgs.forEach(span => expect(span).toHaveStyle({visibility: 'hidden'})))
  })

  test("it renders correctly when 3 characters are found", () => {
    useFoundNames.mockReturnValueOnce(["Da Vinci", "Picasso", "Warhol"]);
    render(<Header characters={characters}/>);

    const daVinciImg = screen.getAllByText(/Found/i)[0];
    const picassoImg = screen.getAllByText(/Found/i)[2];
    const warholImg = screen.getAllByText(/Found/i)[4];
    const allOtherCharacterImgs = screen.getAllByText(/Found/i).filter((val, ind) => ![0,2,4].includes(ind));
    
    expect(daVinciImg).toHaveStyle({visibility: 'visible'})
    expect(picassoImg).toHaveStyle({visibility: 'visible'})
    expect(warholImg).toHaveStyle({visibility: 'visible'})
    expect(allOtherCharacterImgs.forEach(span => expect(span).toHaveStyle({visibility: 'hidden'})))
  })

  test("it renders correctly when 0 characters are found", () => {
    useFoundNames.mockReturnValueOnce([]);
    render(<Header characters={characters}/>);

    const allCharacterImgs = screen.getAllByText(/Found/i)
    
    allCharacterImgs.forEach(span => expect(span).toHaveStyle({visibility: 'hidden'}))
  })
})