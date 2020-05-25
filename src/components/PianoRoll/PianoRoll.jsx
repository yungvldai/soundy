import React from 'react';
import classes from './PianoRoll.module.scss';
import Octave from "./Octave";



function PianoRoll(props) {
  return (
    <div className={classes.PianoRoll}>
      <Octave startKey={9} order={0} />
      <Octave order={1} />
      <Octave order={2} />
      <Octave order={3} />
      <Octave order={4} />
      <Octave order={5} />
      <Octave order={6} />
      <Octave order={7} />
      <Octave endKey={1} order={8} />
    </div>
  );
}

export default PianoRoll;
