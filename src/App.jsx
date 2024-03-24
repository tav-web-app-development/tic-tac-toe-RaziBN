import { useState } from "react";
import "./App.css";
import Board from "./Components/Board";
function App() {
  const initialBoard = {
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
    nine: "",
  };
  const winnerTrio = [
    ["one", "two", "three"],
    ["four", "five", "six"],
    ["seven", "eight", "nine"],
    ["one", "four", "seven"],
    ["two", "five", "eight"],
    ["three", "six", "nine"],
    ["one", "five", "nine"],
    ["three", "five", "seven"],
  ];
  const [player, setPlayer] = useState("X");
  const [board, setBoard] = useState(initialBoard);
  const buttons = document.querySelectorAll("table button");
  const resetBoard = () => {
    setBoard(initialBoard);
    setPlayer("X");

    buttons.forEach((eachButton) => {
      eachButton.disabled = false;
    });
  };
  function checkWinner() {
    for (let trio of winnerTrio) {
      const [a, b, c] = trio;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return false;
  }

  const checkWinnerPlayer = checkWinner();
  let txt = "";
  if (checkWinnerPlayer) {
    buttons.forEach((eachButton) => {
      eachButton.disabled = true;
    });
    txt = `Winner is ${checkWinnerPlayer} ! Please restart the game.`;
  } else {
    txt = `Player ${player} turn`;
  }
  return (
    <>
      <h1>
        <u>Tic Tac Toe</u>
      </h1>
      <p>{txt}</p>
      <Board
        board={board}
        setBoard={setBoard}
        player={player}
        setPlayer={setPlayer}
      />
      <br />
      <button onClick={resetBoard}>Restart Game</button>
    </>
  );
}

export default App;
