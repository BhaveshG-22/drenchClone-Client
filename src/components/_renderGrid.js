import React from "react";

function RenderGrid() {
  let numIterations = 14;
  let color = ["green", "pink", "violet", "cyan", "red", "yellow"];
  let gridNumber = 0;

  let grid = [];
  let gridColors = [];
  let gridColorRow = [];

  for (let i = 0; i < numIterations; i++) {
    let row = [];
    for (let j = 0; j < numIterations; j++) {
      // let randomColor = color[Math.floor(Math.random() * color.length)];

      let randomColor = color[Math.floor(Math.random() * color.length)];
      let e;
      switch (randomColor) {
        case "green":
          e = (
            <div className="border-2 border-gray-400">
              <div
                key={gridNumber++}
                className={`w-8 h-8 border-[18px] border-green-400  `}
              ></div>
            </div>
          );
          gridColorRow[gridColorRow.length++] = "green";
          break;
        case "pink":
          e = (
            <div className="border-2 border-gray-400">
              <div
                key={gridNumber++}
                className={`w-8 h-8 border-[18px] border-pink-400  `}
              ></div>
            </div>
          );
          gridColorRow[gridColorRow.length++] = "pink";

          break;
        case "violet":
          e = (
            <div className="border-2 border-gray-400">
              <div
                key={gridNumber++}
                className={`w-8 h-8 border-[18px] border-violet-400  `}
              ></div>
            </div>
          );
          gridColorRow[gridColorRow.length++] = "violet";

          break;
        case "cyan":
          e = (
            <div className="border-2 border-gray-400">
              <div
                key={gridNumber++}
                className={`w-8 h-8 border-[18px] border-cyan-400  `}
              ></div>
            </div>
          );
          gridColorRow[gridColorRow.length++] = "cyan";

          break;
        case "red":
          e = (
            <div className="border-2 border-gray-400">
              <div
                key={gridNumber++}
                className={`w-8 h-8 border-[18px] border-red-400  `}
              ></div>
            </div>
          );
          gridColorRow[gridColorRow.length++] = "red";

          break;
        case "yellow":
          e = (
            <div className="border-2 border-gray-400">
              <div
                key={gridNumber++}
                className={`w-8 h-8 border-[18px] border-yellow-400  `}
              ></div>
            </div>
          );
          gridColorRow[gridColorRow.length++] = "yellow";

          break;
        default:
          e = (
            <div className="border-2 border- border-gray-400">
              <div
                key={gridNumber++}
                className={`w-8 h-8 border-[18px] border-${randomColor}-400  `}
              ></div>
            </div>
          );
      }

      row[j] = e;
    }
    gridColors[gridColors.length++] = gridColorRow;
    gridColorRow = [];
    grid[i] = (
      <div key={i} className="flex">
        {row}
      </div>
    );
  }
  console.log(gridColors);
  return <div className="grid grid-cols-14">{grid}</div>;
}

export default RenderGrid;
