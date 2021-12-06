import Box from "./components/Box";
import Header from "./components/Header";
import './App.css';
import { useState, useEffect } from "react";



function App() {
  const initialState = Array(9).fill("");
  const statusArray = Array(9).fill(false);

  const [boxValue, setBoxValue] = useState(initialState);
  const [turn1, setTurn1] = useState(false);
  const [filledStatus, setFilledStatus] = useState(statusArray);
  const [count, setCount] = useState(0);

  const fillValue = (index) => {
    if (!filledStatus[index]) {
      let sttsarr = Array.from(filledStatus);
      sttsarr[index] = true;
      setFilledStatus(sttsarr);
      let strings = Array.from(boxValue);
      strings[index] = turn1 ? "X" : "O";
      setBoxValue(strings);
      setTurn1(!turn1);
      setCount(count + 1);
    }
  }

  useEffect(() => {
    const winner = checkWinner(boxValue);
    if (winner) {
      if (winner === "X") {
        alert(`Player 2 Wins.`);
      }
      else {
        alert(`Player 1 Wins.`);
      }
      setBoxValue(initialState);
      setTurn1(false);
      setFilledStatus(statusArray);
      setCount(0);
    }
    if (count === 9 && !winner) {
      alert("Oops ! It's A Draw");
      setBoxValue(initialState);
      setTurn1(false);
      setFilledStatus(statusArray);
      setCount(0);
    }
  }, [boxValue, count, initialState, statusArray])

  const checkWinner = (arr) => {
    const winCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < winCombination.length; i++) {
      const [a, b, c] = winCombination[i];
      if ((arr[a] === arr[b]) && (arr[a] === arr[c])) {
        return arr[a];
      }
    }
    return null;
  }
  const turn = {
    background: turn1 ? "yellow" : "rgb(255, 127, 212)",
  }

  return (
    <div className="App">
      <Header />
      <div className="player" style={turn}>
        <h3>Player {turn1 ? "2" : "1"}'s Turn</h3>
      </div>
      <div className="line">
        <Box state={boxValue[0]} onClick={() => fillValue(0)} />
        <Box state={boxValue[1]} onClick={() => fillValue(1)} />
        <Box state={boxValue[2]} onClick={() => fillValue(2)} />
      </div>
      <div className="line">
        <Box state={boxValue[3]} onClick={() => fillValue(3)} />
        <Box state={boxValue[4]} onClick={() => fillValue(4)} />
        <Box state={boxValue[5]} onClick={() => fillValue(5)} />
      </div>
      <div className="line">
        <Box state={boxValue[6]} onClick={() => fillValue(6)} />
        <Box state={boxValue[7]} onClick={() => fillValue(7)} />
        <Box state={boxValue[8]} onClick={() => fillValue(8)} />
      </div>
      <button className="Button" onClick={() => {
        setBoxValue(initialState);
        setTurn1(false);
        setFilledStatus(statusArray);
        setCount(0);
      }
      }>Reset The Game</button>

    </div >
  );
}

export default App;
