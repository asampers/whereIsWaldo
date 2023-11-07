import React, { forwardRef} from "react";

export default TargetBox = forwardRef(({children}, ref) => {
  return (
    <div className="guess" ref={ref}>
      {children}
    </div>
  )
})