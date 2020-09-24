import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <div>
      <button
        type="button"
        onClick={props.clickButton}
        className={classes.Button}
      >
        {props.buttonName}
      </button>
    </div>
  );
};

export default Button;
