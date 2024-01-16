// routes/puzzles.tsx

import type { Component } from "solid-js";

const Puzzles: Component = () => {
    const buttonStyle: Record<string, string | number> = {
        marginBotton: "10px",
        fontSize: "18px"
    }
    const buttonContainerStyle: Record<string, string | number> = {
        flex: "1",
        textAlign: "left",
        marginLeft: "20px"
      };
  return (
    <div style="textAlign: center">
    <img
      src="10-boxes-puzzle.png" // Replace with the actual image URL
      alt="Heavy Boxes, Light Boxes"
      style={{ width: "75%", height: "auto" }}
    />
  </div>

  )
};

export default Puzzles;