import React from "react";
import classes from './Control.module.scss';

function ProgressBar(props) {
  return (
    <div className={classes.ProgressBarContainer}>
      <div
        className={classes.ProgressBar}
        style={{
          width: props.value * 100 + '%'
        }}
      />
    </div>
  )
}

export default ProgressBar;
