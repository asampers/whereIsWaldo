import React, {useState} from "react";
import GameImage from "./GameImage";
import Target from "./TargetBox";

export default Gameboard = ({}) => {
  const [targetPos, setTargetPos] = useState({x:0, y: 0, show: false})
  const [guess, setGuess] = useState({x: null, y: null})
  const [imgSize, setImgSize] = useState({w:0, h:0})
  const [foundNames, setFoundNames] = useState([]);
  const characters = [{name: "Da Vinci", x:0.169, y:0.473}, {name: "Kahlo", x:0.890, y:0.407}, {name: "Picasso", x:0.794, y:0.954}, {name: "Van Gogh", x:0.150, y:0.848}, {name: "Warhol", x:0.036, y:0.292}];

  let characterList = characters.map((charac, i) => {
    if(!foundNames.includes(charac.name)) {
      return <GuessBtn key={i} onClick={() => handleDropdownGuess(charac)}>{charac.name}</GuessBtn>
    }
  });

  const setAllStates = (e) => {
    let guessX = e.nativeEvent.offsetX + 12;
    let targetX = e.pageX;
    let Y = e.pageY;
    let imgWidth = e.target.clientWidth;
    let imgHeight = window.document.body.offsetHeight
    setTargetPos({x:targetX, y:Y, show:true})
    setGuess({x:guessX, y:Y})
    setImgSize({w: imgWidth, h: imgHeight})
  }

  const closeTarget = () => {setTargetPos({...targetPos, show:false})}
  
  const foundCharac = (charac) => {
    let left = guess.x - (.04 * imgSize.w)
    let right = guess.x + (.04 * imgSize.w)
    let top = guess.y - (.06 * imgSize.h)
    let bottom = guess.y + (.06 * imgSize.h)
    console.log(`${left} <= ${charac.x  * imgSize.w} && ${charac.x  * imgSize.w} <= ${right}`)
    console.log(`${top} <= ${charac.y * imgSize.h} && ${charac.y * imgSize.h} <= ${bottom}`)
    let xBtwn = left <= (charac.x  * imgSize.w) && (charac.x  * imgSize.w) <= right;
    let yBtwn = top <= (charac.y * imgSize.h) && (charac.y * imgSize.h) <= bottom;
    return xBtwn && yBtwn;
  }

  const handleDropdownGuess = (charac) => {
    let found = foundCharac(charac);
    if(found){setFoundNames([...foundNames, charac.name])};
    
    let outcome = found ? `You found ${charac.name}` : 'Ope, try again!'
    closeTarget();
    console.log(outcome);
  }

  return (
    <>
      <GameImage onClick={setAllStates} />
      <Target styled={targetPos} onClick={closeTarget}>
        {characterList}
      </Target>
    </>  
  )
}