import React, { useEffect, useState } from "react";

function RenderGrid(props) {
  const numIterations = 10;
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    let data = props.grid;
    const updatedGrid = Array.from({ length: numIterations }, (_, i) => {
      return (
        <div key={i} className="flex">
          {Array.from({ length: numIterations }, (_, j) => {
            const sequenceColor = data[i][j];

            switch (sequenceColor) {
              case "red":
                return (
                  <div className="border-2 border-black">
                    <div
                      key={`${i * 10}+${j}`}
                      className={`w-8 h-8 border-[16px] border-red-500`}
                    ></div>
                  </div>
                );

              case "violet":
                return (
                  <div className="border-2 border-black">
                    <div
                      key={`${i * 10}+${j}`}
                      className={`w-8 h-8 border-[16px] border-violet-500`}
                    ></div>
                  </div>
                );

              case "cyan":
                return (
                  <div className="border-2 border-black">
                    <div
                      key={`${i * 10}+${j}`}
                      className={`w-8 h-8 border-[16px] border-cyan-500`}
                    ></div>
                  </div>
                );

              case "pink":
                return (
                  <div className="border-2 border-black">
                    <div
                      key={`${i * 10}+${j}`}
                      className={`w-8 h-8 border-[16px] border-pink-500`}
                    ></div>
                  </div>
                );

              case "green":
                return (
                  <div className="border-2 border-black">
                    <div
                      key={`${i * 10}+${j}`}
                      className={`w-8 h-8 border-[16px] border-green-500`}
                    ></div>
                  </div>
                );

              case "yellow":
                return (
                  <div className="border-2 border-black">
                    <div
                      key={`${i * 10}+${j}`}
                      className={`w-8 h-8 border-[16px] border-yellow-500`}
                    ></div>
                  </div>
                );

              default:
                return (
                  <div className="border-2 border-black">
                    <div
                      key={`${i * 10}+${j}`}
                      className={`w-8 h-8 border-[16px] border-black`}
                    ></div>
                  </div>
                );
            }
          })}
        </div>
      );
    });
    setGrid(updatedGrid);
  }, [props.grid]);

  if (grid.length === 0) {
    return <div>Loading...</div>;
  }

  return <div className="grid grid-cols-14">{grid}</div>;
}

export default RenderGrid;
