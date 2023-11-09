import React, { useRef, useState } from "react";
import Header from "./Header";
import GameImage from "./GameImage";
import Target from "./TargetBox";
import GuessBtn from "./GuessBtn";

export default Play = () => {
  const imageRef = useRef(null)
  const [position, setPosition] = useState({x:0, y: 0, show: false})
  const [foundNames, setFoundNames] = useState([]);
  const [windowSize, setWindowSize] = useState({h:0, w:0})
  const characters = [{name: "Da Vinci", x:0.169, y:0.473}, {name: "Kahlo", x:0.890, y:0.407}, {name: "Picasso", x:0.794, y:0.954}, {name: "Van Gogh", x:0.150, y:0.848}, {name: "Warhol", x:0.036, y:0.292}];

  let characterList = characters.map((charac, i) => {
    if(!foundNames.includes(charac.name)) {
      return <GuessBtn key={i} onClick={() => handleTarget(charac)}>{charac.name}</GuessBtn>
    }
  });

  const setTarget = (e) => {
    let image = imageRef.current.getBoundingClientRect()
    let newX = e.nativeEvent.offsetX;
    let newY = e.pageY;
    setWindowSize({h: window.document.body.offsetHeight, w:image.width})
    setPosition({x:newX, y:newY, show:true})
    console.log(`${newX}x + ${newY}y`)
    console.log(`w: ${image.width} H: ${window.document.body.offsetHeight} `)
  }

  const closeTarget = () => {setPosition({...position, show:false})}
  
  const foundCharac = (charac) => {
    console.log(`w: ${windowSize.w} H: ${windowSize.h} `)
    let left = position.x - (.04 * windowSize.w)
    let right = position.x + (.04 * windowSize.w)
    let top = position.y - (.06 * windowSize.h)
    let bottom = position.y + (.06 * windowSize.h)
    console.log(`${left} <= ${charac.x * windowSize.w} && ${charac.x * windowSize.w} <= ${right}`)
    console.log(`${top} <= ${charac.y * windowSize.h} && ${charac.y * windowSize.h} <= ${bottom}`)
    let xBtwn = left <= (charac.x * windowSize.w) && (charac.x * windowSize.w) <= right;
    let yBtwn = top <= (charac.y * windowSize.h) && (charac.y * windowSize.h) <= bottom;
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
      <GameImage ref={imageRef} onClick={setTarget} />
      <div>
      <Target styled={position} onClick={closeTarget}>
        {characterList}
      </Target>
      </div>
    </>
  )
}