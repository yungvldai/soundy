import React from 'react';
import classes from './MusicSheet.module.scss';
import Clefs from "./Clefs";

function countLinePx(line, clef) {
  if (clef === 'treble') {

  }
}

function MusicSheet(props) {
  return (
    <div className={classes.MusicSheet}>
      <Clefs clef={props.clef} />
      <div className={classes.Line}></div>
      <div className={classes.Line}></div>
      <div className={classes.Line}></div>
      <div className={classes.Line}></div>
      <div className={classes.Line}></div>
    </div>
  );
}

export default MusicSheet;
