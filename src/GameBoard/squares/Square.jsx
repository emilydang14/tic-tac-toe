import React from "react";
import styles from "../squares/Square.module.css";

const Square = (props) => {
  //disable double click change value on the square
  const clickHandler = () => {
    if (!props.squareValue) {
      props.clickSquare();
    }
  };
  return (
    <button type="button" className={styles.Square} onClick={clickHandler}>
      {props.squareValue}
    </button>
  );
};

export default Square;
