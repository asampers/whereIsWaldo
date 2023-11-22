import React, {useState} from "react";
import GameImage from "./GameImage";
import GuessBtn from "./GuessBtn";
import Target from "./TargetBox";
import AlertOutcome from "./AlertOutcome";
import { useFoundNamesDispatch, useFoundNames } from "./Context";
import { getClickPositions, setBoxPositions } from "../utils/gameBoardHelper";

export default Gameboard = ({endGame, characters}) => {
  const [targetPos, setTargetPos] = useState({x:0, y: 0, show: false})
  const [outcome, setOutcome] = useState({visible: false, name:null});
  const [guess, setGuess] = useState({x: null, y: null})
  const [imgSize, setImgSize] = useState({w:0, h:0})
  const FoundNames = useFoundNames();
  const dispatch = useFoundNamesDispatch()
  
  let characterList = characters.map((charac, i) => {
    if(!FoundNames.includes(charac.name)) {
      return <GuessBtn key={i} onClick={() => handleDropdownGuess(charac)}>{charac.name}</GuessBtn>
    }
  });

  const setAllStates = (e) => {
    const { guessX, guessY, targetX, targetY, imgWidth, imgHeight } = getClickPositions(e)
    setTargetPos({x:targetX, y:targetY, show:true})
    setGuess({x:guessX, y:guessY})
    setOutcome({...outcome, visible: false})
    setImgSize({w: imgWidth, h: imgHeight})
  }

  const closeTarget = () => {setTargetPos({...targetPos, show:false})}
  
  const foundCharac = (charac) => {
    const { left, right, top, bottom } = setBoxPositions(guess, imgSize)
    let xBtwn = left <= (charac.x  * imgSize.w) && (charac.x  * imgSize.w) <= right;
    let yBtwn = top <= (charac.y * imgSize.h) && (charac.y * imgSize.h) <= bottom;
    return xBtwn && yBtwn;
  }

  const handleDropdownGuess = (charac) => {
    let found = foundCharac(charac);
    let outcome = found ? charac.name : null;
    if(found){dispatch({type: 'added', nextName: charac.name})};
    closeTarget();
    setOutcome({visible: true, name: outcome})
    setTimeout(() => {setOutcome({visible: false, name: null})}, 3000)
    if(found && FoundNames.length == 4) {endGame()}
  }

  return (
    <>
      <GameImage onClick={setAllStates} />
      <Target styled={targetPos} onClick={closeTarget}>
        {characterList}
      </Target>
      <AlertOutcome found={outcome} styled={targetPos}/>
    </>  
  )
}