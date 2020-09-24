import React, { useState } from "react";
import Square from "./squares/Square";
import classes from "./GameBoard.module.css";
import Button from "../Button/Button";

const GameBoard = () => {
  const [boardValues, setBoardValues] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(false);

  const clickSquareHandler = (index) => {
    setXisNext(!xIsNext); //determine X or O
    const newBoardValues = [...boardValues]; //avoiding mutate the state directly
    xIsNext ? (newBoardValues[index] = "X") : (newBoardValues[index] = "O");
    setBoardValues(newBoardValues);
  };

  //each square is different, render with different index
  const renderSquare = (index) => {
    return (
      <Square
        squareValue={boardValues[index]}
        clickSquare={() => clickSquareHandler(index)}
      />
    );
  };
  //set board back to empty
  const restartGameHandler = () => {
    setBoardValues(Array(9).fill(null));
  };

  //calculate the winner

  const checkWinner = (squares) => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8],
    ];
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  //GameOver checking

  //winner
  //board is fully filled

  //Updating Game Status
  const winner = checkWinner(boardValues);
  const gameOver =
    !!winner /* trick to turn string into boolean */ ||
    boardValues.filter((value) => value).length === 9;

  const GameStatus = winner
    ? `The winner is ${winner}`
    : `Next is : ${xIsNext ? "X" : "O"}`;

  return (
    <div>
      {gameOver ? (
        <div className={classes.GameContainer}>
          <Button clickButton={restartGameHandler} buttonName="Restart" />
          <p className={classes.text}>Game Over</p>
          <p className={classes.text}> {GameStatus} </p>

          <div className={classes.GameBoard}>
            <div className={classes.row}>
              {renderSquare(0)}
              {renderSquare(1)}
              {renderSquare(2)}
            </div>
            <div className={classes.row}>
              {renderSquare(3)}
              {renderSquare(4)}
              {renderSquare(5)}
            </div>
            <div className={classes.row}>
              {renderSquare(6)}
              {renderSquare(7)}
              {renderSquare(8)}
            </div>
          </div>
        </div>
      ) : (
        <div className={classes.GameContainer}>
          <Button clickButton={restartGameHandler} buttonName="Restart" />
          <p className={classes.text}> {GameStatus} </p>
          <div className={classes.GameBoard}>
            <div className={classes.row}>
              {renderSquare(0)}
              {renderSquare(1)}
              {renderSquare(2)}
            </div>
            <div className={classes.row}>
              {renderSquare(3)}
              {renderSquare(4)}
              {renderSquare(5)}
            </div>
            <div className={classes.row}>
              {renderSquare(6)}
              {renderSquare(7)}
              {renderSquare(8)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameBoard;
