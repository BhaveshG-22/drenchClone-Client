import React, { useState } from "react";
import { useEffect } from "react";

function RenderGrid() {
  const [grid, setGrid] = useState("");

  useEffect(() => {
    console.log("here");
    fetch("https://drench-clone-api.vercel.app/")
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        setGrid(data);
        RenderGrid();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  let numIterations = 14;
  let color = ["green", "pink", "violet", "cyan", "red", "yellow"];
  let gridNumber = 0;

  let Ogrid = [];
  let gridColors = [];
  let gridColorRow = [];

  function RenderGrid() {
    for (let i = 0; i < numIterations; i++) {
      let row = [];
      for (let j = 0; j < numIterations; j++) {
        let e;
        console.log(grid[gridNumber++]);
        switch (grid[gridNumber++]) {
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
            console.log("rann");

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
            console.log("rann");

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
            console.log("rann");

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
            console.log("rann");

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
            console.log("rann");

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
            console.log("rann");

            break;
          default:
            e = (
              <div className="border-2 border- border-gray-400">
                <div
                  key={gridNumber++}
                  className={`w-8 h-8 border-[18px] border-white  `}
                ></div>
              </div>
            );
        }

        row[j] = e;
      }
      gridColors[gridColors.length++] = gridColorRow;
      gridColorRow = [];
      Ogrid[i] = (
        <div key={i} className="flex">
          {row}
        </div>
      );
    }
    console.log(gridColors);
  }
  return <div className="Ogrid Ogrid-cols-14">{Ogrid}</div>;
}

export default RenderGrid;
