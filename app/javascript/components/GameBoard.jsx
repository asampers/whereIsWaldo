import React, {useRef, useState} from "react";
import GameImage from "./GameImage";
import Target from "./TargetBox";

export default Gameboard = ({}) => {
    const imageRef = useRef(null)
  const [position, setPosition] = useState({x:0, offsetX: null, y: 0, show: false})
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
    let newWindowWidth = image.width
    let offset = e.nativeEvent.offsetX + 12
    let newX = e.pageX 
    let newY = e.pageY;
    let offX = offset != newX ? offset : null;
    setWindowSize({h: window.document.body.offsetHeight, w:newWindowWidth})
    setPosition({x:newX, offsetX: offX, y:newY, show:true})
    console.log(`${newX}x + ${newY}y`)
    console.log(`w: ${image.width} H: ${window.document.body.offsetHeight} `)
  }

  const closeTarget = () => {setPosition({...position, show:false})}
  
  const foundCharac = (charac) => {
    let left = (position.x) - (.04 * windowSize.w)
    let right = (position.x) + (.04 * windowSize.w)
    let x = charac.x  * windowSize.w
    if (position.offsetX) {
      left = (position.offsetX) - (.04 * 1119)
      right = (position.offsetX) + (.04 * 1119)
      x = (charac.x  * 1119)
    }
    console.log(`offset: ${position.offsetX} `)
    let top = position.y - (.06 * windowSize.h)
    let bottom = position.y + (.06 * windowSize.h)
    console.log(`${left} <= ${x} && ${x} <= ${right}`)
    console.log(`${top} <= ${charac.y * windowSize.h} && ${charac.y * windowSize.h} <= ${bottom}`)
    let xBtwn = left <= (x) && (x) <= right;
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
      <GameImage ref={imageRef} onClick={setTarget} />
      <Target styled={position} onClick={closeTarget}>
        {characterList}
      </Target>
    </>  
  )
}