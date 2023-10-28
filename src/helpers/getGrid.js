import { useEffect, useState } from "react";

export default function GetGrid() {
  const [data, setData] = useState("");
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
        setData(data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  return data;
}
