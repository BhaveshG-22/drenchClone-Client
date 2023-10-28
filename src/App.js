import Header from "./components/_header";
import "./App.css";
import GameGrid from "./components/_gameGrid";

function App() {
  return (
    <div className="App h-screen w-screen flex flex-col items-center">
      <Header />
      <div className="mx-auto my-auto">
        <GameGrid />
      </div>
    </div>
  );
}

export default App;
