import React, { Component, forwardRef } from 'react';

class Audio extends Component {
  render() {
    return (
      <audio
        src={this.props.src}
        ref={this.props.innerRef}
      />
    );
  }
}

export default forwardRef((props, ref) => {
  return (
    <Audio innerRef={ref} {...props} />
  );
});


