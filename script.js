/*get elements*/
const player = document.querySelector('.play');
const video = player.querySelector('.control');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const toggle1 = player.querySelector('.toggle1');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


// play and pause function
let togglePlay = () => {
    video.paused ? video.play() : video.pause();
}


let playPauseButton = () => {
    // toggle.trigger('play');
    togglePlay();
    toggle.textContent =  video.paused ? "play" : "pause";
}


// event listeners
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', playPauseButton);
// video.addEventListener('keydown', )
// video.addEventListener('timeupdate', handleProgress);