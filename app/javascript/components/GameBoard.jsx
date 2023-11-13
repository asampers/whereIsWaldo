import React, {useState} from "react";
import GameImage from "./GameImage";
import GuessBtn from "./GuessBtn";
import Target from "./TargetBox";
import { useFoundNamesDispatch, useFoundNames } from "./Context";

export default Gameboard = ({}) => {
  const [targetPos, setTargetPos] = useState({x:0, y: 0, show: false})
  const [guess, setGuess] = useState({x: null, y: null})
  const [imgSize, setImgSize] = useState({w:0, h:0})
  const FoundNames = useFoundNames();
  const dispatch = useFoundNamesDispatch()
  const characters = [{name: "Da Vinci", x:0.166, y:0.374}, {name: "Kahlo", x:0.895, y:0.2925}, {name: "Picasso", x:0.7875, y:0.944}, {name: "Van Gogh", x:0.145, y:0.824}, {name: "Warhol", x:0.0325, y:0.1625}];

  let characterList = characters.map((charac, i) => {
    if(!FoundNames.includes(charac.name)) {
      return <GuessBtn key={i} onClick={() => handleDropdownGuess(charac)}>{charac.name}</GuessBtn>
    }
  });

  const setAllStates = (e) => {
    let guessX = e.nativeEvent.offsetX;
    let guessY = e.nativeEvent.offsetY
    let targetX = e.pageX;
    let targetY = e.pageY;
    let imgWidth = e.target.clientWidth;
    let imgHeight = e.target.clientHeight;
    setTargetPos({x:targetX, y:targetY, show:true})
    setGuess({x:guessX, y:guessY})
    setImgSize({w: imgWidth, h: imgHeight})
    console.log(`${guessX}x + ${guessY}y`)
    console.log(`w:${imgWidth}, h:${imgHeight}`)
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
    if(found){dispatch({type: 'added', nextName: charac.name})};
    
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