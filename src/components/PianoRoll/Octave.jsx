import React from "react";
import classes from './Octave.module.scss';

const sounds = [
  { note: 'c' },
  { note: 'c#', isSemitone: true },
  { note: 'd' },
  { note: 'd#', isSemitone: true },
  { note: 'e' },
  { note: 'f' },
  { note: 'f#', isSemitone: true },
  { note: 'g' },
  { note: 'g#', isSemitone: true },
  { note: 'a' },
  { note: 'a#', isSemitone: true },
  { note: 'b' }
];

function Keyboard(play, [ startKey, endKey ] ,order) {
  return sounds.map((sound, index) => {
    return (
      <div
        className={[
          classes[sound.isSemitone ? 'Semitone' : 'Tone'],
          play[index] ? classes[play[index]] : '',
          classes.Key
        ].join(' ')}
        data-note={`${sound.note.toUpperCase()}${order}`}
        key={`note-${sound.note}`}
      />
    );
  }).slice(startKey, endKey);
}

function Octave(props) {
  return (
    <div className={classes.Octave}>
      {
        Keyboard(props.play || [], [ props.startKey, props.endKey ], props.order)
        /*
          if startKey is undefined, slice begins from the index 0.
          if endKey is undefined, slice ends on the index keys.length
        */
      }
    </div>
  );
}

export default Octave;
