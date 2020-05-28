import React, { Component, createRef } from 'react';
import classes from './LearnToPlay.module.scss';
import PianoRoll from '@comp/PianoRoll/PianoRoll';
import Audio from "@comp/Audio/Audio";
import Control from "@comp/Control/Control";
import MusicSheet from "@comp/MusicSheet/MusicSheet";

class LearnToPlay extends Component {
  constructor(props) {
    super(props);
    this.audioControl = createRef();
    this.hasSrc = true;
    this.state = {
      isPlaying: false,
      time: 0
    };
    this.soundPlay = this.soundPlay.bind(this);
    this.soundPause = this.soundPause.bind(this);
    this.soundStop = this.soundStop.bind(this);
    this.timeUpdated = this.timeUpdated.bind(this);
  }

  getDuration() {
    return this.audioControl.current ? this.audioControl.current.duration : 0;
  }

  soundPlay() {
    this.setState({
      isPlaying: true
    });
    this.audioControl.current.play();
  }

  soundPause() {
    this.setState({
      isPlaying: false
    });
    this.audioControl.current.pause();
  }

  soundStop() {
    this.soundPause();
    this.audioControl.current.currentTime = 0;
  }

  timeUpdated() {
    this.setState({
      time: this.audioControl.current.currentTime
    });
  }

  componentDidMount() {
    this.audioControl.current.addEventListener('timeupdate', this.timeUpdated);
    this.audioControl.current.addEventListener('ended', this.soundStop);
  }

  componentWillUnmount() {
    this.audioControl.current.removeEventListener('timeupdate', this.timeUpdated);
    this.audioControl.current.removeEventListener('ended', this.soundStop);
  }

  render() {
    return (
      <div className={classes.LearnToPlay}>
        {
          this.hasSrc && (
            <Audio
              ref={this.audioControl}
              src="https://www.kozco.com/tech/LRMonoPhase4.wav"
            />
          )
        }
        <div className={classes.SheetsContainer}>
          <MusicSheet clef="treble" />
          <MusicSheet clef="bass" />
        </div>
        <Control
          isPlaying={this.state.isPlaying}
          progress={this.state.time / this.getDuration()}

          play={this.soundPlay}
          pause={this.soundPause}
          stop={this.soundStop}
        />
        <div className={classes.PianoRollContainer}>
          <PianoRoll/>
        </div>
      </div>
    );
  }
}

export default LearnToPlay;
