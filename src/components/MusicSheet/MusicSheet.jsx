import React from 'react';
import classes from './MusicSheet.module.scss';

function MusicSheet() {
  return (
    <div className={classes.MusicSheet}>
      <div className={classes.Line}></div>
      <div className={classes.Line}></div>
      <div className={classes.Line}></div>
      <div className={classes.Line}></div>
      <div className={classes.Line}></div>
    </div>
  );
}

export default MusicSheet;
