import React, { useState } from "react";
import { useEffect } from "react";

function RenderGrid() {
  // const [grid, setGrid] = useState("");
  const [RenderedGrid, setRenderedGrid] = useState("");

  useEffect(() => {
    console.log("here");
    fetch("http://localhost:4000/")
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        // setGrid(data);
        tempGrid(data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  let gridNumber = 0;
  let e;
  let numIterations = 14;

  function tempGrid(grid) {
    for (let i = 0; i < numIterations; i++) {
      let row = [];
      for (let j = 0; j < numIterations; j++) {
        console.log(grid[gridNumber++][j]);
        switch (grid[gridNumber++][j]) {
          case "green":
            e = (
              <div className="border-2 border-gray-400">
                <div
                  key={gridNumber}
                  className={`w-8 h-8 border-[18px] border-green-400  `}
                ></div>
              </div>
            );
            row[j] = e;
            break;
          case "pink":
            e = (
              <div className="border-2 border-gray-400">
                <div
                  key={gridNumber}
                  className={`w-8 h-8 border-[18px] border-pink-400  `}
                ></div>
              </div>
            );
            row[j] = e;
            break;
          case "violet":
            e = (
              <div className="border-2 border-gray-400">
                <div
                  key={gridNumber}
                  className={`w-8 h-8 border-[18px] border-violet-400  `}
                ></div>
              </div>
            );
            row[j] = e;
            break;
          case "cyan":
            e = (
              <div className="border-2 border-gray-400">
                <div
                  key={gridNumber}
                  className={`w-8 h-8 border-[18px] border-cyan-400  `}
                ></div>
              </div>
            );
            row[j] = e;
            break;
          case "red":
            e = (
              <div className="border-2 border-gray-400">
                <div
                  key={gridNumber}
                  className={`w-8 h-8 border-[18px] border-red-400  `}
                ></div>
              </div>
            );
            row[j] = e;
            break;
          case "yellow":
            e = (
              <div className="border-2 border-gray-400">
                <div
                  key={gridNumber}
                  className={`w-8 h-8 border-[18px] border-yellow-400  `}
                ></div>
              </div>
            );
            row[j] = e;
            break;
          default:
            e = (
              <div className="border-2 border-gray-400">
                <div
                  key={gridNumber}
                  className={`w-8 h-8 border-[18px] border-cyan-900  `}
                ></div>
              </div>
            );
            row[j] = e;
        }
        // row[j] = e;
      }
      // console.log(RenderGrid);
      let tempGrid = [...RenderedGrid];
      console.log(tempGrid);

      tempGrid[RenderedGrid.length] = (
        <div key={i} className="flex">
          {row}
        </div>
      );
      console.log(tempGrid);

      setRenderedGrid(tempGrid);

      // gridColors[gridColors.length++] = gridColorRow;
      // gridColorRow = [];
      // Ogrid[i] = (
      //   <div key={row + gridNumber} className="flex">
      //     {row}
      //   </div>
      // );
    }
  }
  console.log(RenderedGrid);
  return <div className="grid grid-cols-14">{RenderedGrid}</div>;
}

export default RenderGrid;
