import React, { useEffect, useState } from "react";
import RenderGrid from "./_renderGrid4";
import HandelMoves from "../helpers/handelMoves";

function RenderControls() {
  const [moves, setMoves] = useState(30);
  const [grid, setGrid] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMSG, setModalMSG] = useState("");
  const [isReset, setReset] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [newGame, setNewGame] = useState(false);
  let allSame = false;

  useEffect(() => {
    setMoves(30);
  }, [isReset]);

  useEffect(() => {
    if (moves === 0) {
      setModalMSG(() => {
        return "Moves Completed , Try Again! 🥺";
      });
      setIsModalVisible(true);
      setGameOver(true);
    }
  }, [moves]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setGrid(data);
        console.log(data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, [isReset]);

  async function handelBtn(color) {
    if (gameOver) {
      setModalMSG(() => {
        return "Game Over, Start a 🆕 Game";
      });
      setIsModalVisible(true);
      setGameOver(true);
      setNewGame(true);

      return;
    }
    if (moves == 0) {
      setModalMSG(() => {
        return "No Moves Left! Game Over, 😢";
      });
      setIsModalVisible(true);
      setGameOver(true);

      return;
    }

    console.log(color + " pressed");

    setMoves(() => {
      return moves - 1;
    });

    const newGrid = await HandelMoves(grid, color);
    setGrid(newGrid);

    checkIfFinish(newGrid);
    // console.log(newGrid);
  }

  // useEffect(() => {
  //   if (moves === 0) {
  //     setModalMSG("Moves Completed, Try Again! 🥺");
  //     setIsModalVisible(true);
  //     setGameOver(true);
  //   } else if (gameOver) {
  //     setModalMSG("Game Over, Start a 🆕 Game");
  //     setIsModalVisible(true);
  //     setNewGame(true);
  //   }
  // }, [moves, gameOver]);

  if (isLoading) {
    return <h1>Loading!!!</h1>;
  }

  function checkIfFinish(grid) {
    let first = grid[0][0];
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] !== first) {
          allSame = true;
        }
      }
    }

    !allSame && handelWin();

    function handelWin() {
      setModalMSG(() => {
        return "Congratulations,You Won 🎉🎉";
      });

      setIsModalVisible(true);
      setGameOver(true);
    }
  }
  function handelNewGame() {
    setIsModalVisible(false);
    setReset(!isReset);
    setNewGame(true);

    setGameOver(false);
  }

  return (
    <div className="flex bg-gray-700 p-8 gap-4">
      <RenderGrid grid={grid} />
      <div className="bg-slate-600 w-64 min-h-80 flex flex-col items-center  ">
        <div className="flex">
          <div className="font-mono font-bold text-8xl m-4 p-2 bg-gray-700 w-fit">
            {moves}
          </div>
          <div className="mt-auto mb-auto text-xl">
            Moves to drench the board!
          </div>
        </div>
        <div className="mt-5 flex flex-col space-y-5">
          <div className="flex space-x-5">
            <a
              role="button"
              className="bg-green-500 hover:bg-green-400 hover:scale-110   ease-in-out w-14 h-14 border-2 border-gray-400 rounded-full"
              onClick={() => {
                handelBtn("green");
              }}
            />
            <a
              role="button"
              className="bg-pink-500 hover:bg-pink-400 w-14 h-14 border border-gray-400 rounded-full"
              onClick={() => {
                handelBtn("pink");
              }}
            />
            <a
              role="button"
              className="bg-violet-500 hover:bg-violet-400 w-14 h-14 border border-gray-400 rounded-full"
              onClick={() => {
                handelBtn("violet");
              }}
            />
          </div>
          <div className="flex space-x-5">
            <a
              role="button"
              className="bg-cyan-500 hover:bg-cyan-400 w-14 h-14 border border-gray-400 rounded-full"
              onClick={() => {
                handelBtn("cyan");
              }}
            />
            <a
              role="button"
              className="bg-red-500 hover:bg-red-400 w-14 h-14 border border-gray-400 rounded-full"
              onClick={() => {
                handelBtn("red");
              }}
            />
            <a
              role="button"
              className="bg-yellow-500 hover:bg-yellow-400 w-14 h-14 border border-gray-400 rounded-full"
              onClick={() => {
                handelBtn("yellow");
              }}
            />
          </div>
        </div>
        <button
          onClick={() => {
            setGameOver(false);

            setReset(!isReset);
          }}
          className="mx-auto p-2 font-mono my-auto mt-7  rounded-xl text-white bg-gray-400"
        >
          Reset
        </button>
      </div>
      {isModalVisible && (
        <div className=" z-10 fixed inset-0  w-full h-full  bg-black bg-opacity-75  flex justify-center items-center">
          <div className="bg-white select-none flex flex-col items-center  justify-center p-8 rounded-lg shadow-lg">
            <div className="flex gap-4">
              <h1 className=" font-thin text-3xl">{modalMSG} </h1>
              <button
                onClick={() => {
                  setIsModalVisible(false);
                }}
                className="p-5 font-sans scale-125  font-bold   border-4 rounded-full text-white bg-gray-400 w-14 h-14  flex items-center justify-center"
                // className="p-5 font-sans scale-125 font-bold capitalize border-4 rounded-full text-white bg-gray-400 w-16 h-16 flex items-center justify-center"
              >
                X
              </button>
            </div>
            {gameOver && (
              <div
                className="bg-gray-500 p-4 font-sans font-thin select-none flex items-center justify-center  rounded-lg shadow-lg"
                onClick={() => {
                  handelNewGame();
                }}
              >
                New Game
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default RenderControls;
