import React, { useRef, useState } from "react";
import Header from "./Header";
import GameImage from "./GameImage";
import Target from "./TargetBox";
import GuessBtn from "./GuessBtn";

export default Play = () => {
  //const targetRef = useRef(null);
  const [position, setPosition] = useState({x:0, y: 0, show: false})
  const characters = [{name: "Da Vinci", x:152, y:635}, {name: "Kahlo", x:655, y:554}, {name: "Picasso", x:588, y:1228}, {name: "Van Gogh", x:135, y:1101}, {name: "Warhol", x:62, y:411}];
  const [foundNames, setFoundNames] = useState([]);
  let characterList = characters.map((charac, i) => {
    if(!foundNames.includes(charac.name)) {
      return <GuessBtn key={i} onClick={() => handleTarget(charac)}>{charac.name}</GuessBtn>
    }
  });

  const setTarget = (e) => {
    let newX = e.pageX;
    let newY = e.pageY
    setPosition({x:newX, y:newY, show:true})
    console.log(`${newX}x + ${newY}y`)
  }

  const closeTarget = () => {setPosition({...position, show:false})}
  
  const foundCharac = (charac) => {
    let left = position.x - 30
    let right = position.x + 30
    let top = position.y - 40
    let bottom = position.y + 40
    console.log(`${left} <= ${charac.x} && ${charac.x} <= ${right}`)
    console.log(`${top} <= ${charac.y} && ${charac.y} <= ${bottom}`)
    let xBtwn = left <= charac.x && charac.x <= right;
    let yBtwn = top <= charac.y && charac.y <= bottom;
    return xBtwn && yBtwn;
  }

  const handleTarget = (charac) => {
    let found = foundCharac(charac);
    if(found){setFoundNames([...foundNames, charac.name])};
    
    let outcome = found ? `You found ${charac.name}` : 'Ope, try again!'
    closeTarget();
    console.log(outcome);
  }


  return (
    <>
      <Header />
      <GameImage onClick={setTarget} />
      <Target styled={position} onClick={closeTarget}>
        {characterList}
      </Target>
    </>
  )
}