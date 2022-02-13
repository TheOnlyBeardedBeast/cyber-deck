import React from "react";
import { Cube } from "./Cube";
import "./App.css";
import { styled } from "@stitches/react";
import { motion } from "framer-motion";

const PerspectiveRoot = styled(motion.div, {
  position: "relative",
  transformStyle: "preserve-3d",
  perspective: "2000px",
  perspectiveOrigin: "center",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  height: "100%",
});

function App() {
  const grid = React.useRef<HTMLDivElement>(null);

  return (
    <PerspectiveRoot
      key="App"
      initial={{ opacity: 0, transform: "scale(2)" }}
      animate={{ opacity: 1, transform: "scale(1)" }}
      exit={{ opacity: 0, transform: "scale(2)" }}
      transition={{ bounce: 0 }}
    >
      <div ref={grid} className="grid main">
        {[...Array(16)].map((_, index) => (
          <Cube>{`DSC_${index}`}</Cube>
        ))}
        <Cube type="highlighted">DSC_16</Cube>
        <Cube type="disabled">DSC_16</Cube>
        <Cube type="selected">DSC_16</Cube>
      </div>
      {/* <div className="grid">
        <Cube />
        <Cube />
        <Cube />
        <Cube />
        <Cube />
        <Cube />
        <Cube />
        <Cube />
        <Cube />
        <Cube />
        <Cube />
        <Cube />
        <Cube />
        <Cube />
        <Cube />
        <Cube />
      </div> */}
    </PerspectiveRoot>
  );
}

export default App;
