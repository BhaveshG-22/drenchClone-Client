// import { useState } from "react";

export default async function HandelMoves(grid, color) {
  try {
    const response = await fetch("http://localhost:4000/handelMoves", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ grid, color }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const updatedGrid = await response.json();

    return updatedGrid;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
