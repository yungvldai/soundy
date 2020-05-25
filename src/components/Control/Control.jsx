import React from "react";
import classes from './Control.module.scss';

function Control(props) {
  return (
    <div className={classes.Control}>
      {
        props.isPlaying ? (
          <div className={classes.Button} onClick={props.pause}>
            <i className="material-icons">
              pause
            </i>
          </div>
        ) : (
          <div className={classes.Button} onClick={props.play}>
            <i className="material-icons">
              play_arrow
            </i>
          </div>
        )
      }
      <div className={classes.Button} onClick={props.stop}>
        <i className="material-icons">
          stop
        </i>
      </div>
    </div>
  )
}

export default Control;
