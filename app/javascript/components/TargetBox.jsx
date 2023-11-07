import React, { forwardRef} from "react";

export default TargetBox = forwardRef((props, ref) => {
  return (
    <div className="targetBox" ref={ref}></div>
  )
})