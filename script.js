const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progess = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// Play & Pause Video
toggleVideoStatus = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

// Update Play/Pause Icon
updatePlayIcon = () => {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
};

// Update Progess & Time Stamp
updateProgress = () => {
  progress.value = (video.currentTime / video.duration) * 100;

  // Get Minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }

  // Get Seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
};

// Set Video Time to progress
setVideoProgress = () => {
  video.currentTime = (+progress.value * video.duration) / 100;
};

// Stop video
stopVideo = () => {
  video.currentTime = 0;
  video.pause();
};

// Event Listners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

progess.addEventListener("change", setVideoProgress);
