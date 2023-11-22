export function getClickPositions(e) {
  let guessX = e.nativeEvent.offsetX;
  let guessY = e.nativeEvent.offsetY;
  let targetX = e.pageX;
  let targetY = e.pageY;
  let imgWidth = e.target.clientWidth;
  let imgHeight = e.target.clientHeight;

  return { guessX, guessY, targetX, targetY, imgWidth, imgHeight };
}

export function setBoxPositions(guess, imgSize) {
  let left = guess.x - 0.04 * imgSize.w;
  let right = guess.x + 0.04 * imgSize.w;
  let top = guess.y - 0.06 * imgSize.h;
  let bottom = guess.y + 0.06 * imgSize.h;

  return { left, right, top, bottom };
}
