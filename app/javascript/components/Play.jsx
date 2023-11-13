import React, { useRef, useState } from "react";
import Header from "./Header";
import GameBoard from "./GameBoard";
import Footer from "./Footer";
import { FoundNamesProvider } from "./Context";

export default Play = () => {
  return (
    <>
      <FoundNamesProvider>
        <Header />
        <GameBoard />
      </FoundNamesProvider>  
      <Footer />
    </>
  )
}