let ctx = new window.AudioContext();
let analyser = ctx.createAnalyser();
analyser.fftSize = 2048;
let source;

function listen() {
  let buffer = new Uint8Array(analyser.fftSize);
  analyser.getByteFrequencyData(buffer);

  console.log(buffer)

  window.requestAnimationFrame(listen);
};

navigator
  .mediaDevices
  .getUserMedia({
    audio: true,
    video: false
  })
  .then(stream => {
    source = ctx.createMediaStreamSource(stream);
    source.connect(analyser);
    listen();
  })
  .catch(err => {
    console.log(err)
  });



