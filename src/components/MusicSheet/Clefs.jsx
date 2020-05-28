import React from "react";
import classes from './MusicSheet.module.scss';

import TrebleClef from '../../static/treble-clef.png';
import BassClef from '../../static/bass-clef.png';

function Clefs(props) {
  return (
    <div>
      {
        props.clef === 'treble' && (
          <img
            alt="Treble clef"
            className={classes.TrebleClef}
            src={TrebleClef}
            draggable={false}
          />
        )
      }
      {
        props.clef === 'bass' && (
          <img
            alt="Bass clef"
            className={classes.BassClef}
            src={BassClef}
            draggable={false}
          />
        )
      }
    </div>
  );
}

export default Clefs
