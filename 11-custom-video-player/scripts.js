/* Get our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build our functions */

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
};

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    // console.log(icon);
    toggle.textContent = icon;
};

function skip() {
    // console.log(this.dataset);
    video.currentTime += parseFloat(this.dataset.skip);
};

function handleRangeUpdate() {
    // console.log(this.value);
    // console.log(this.name);

    video[this.name] = this.value;
};

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    console.log(progressBar);
    progressBar.style.flexBasis = `${percent}%`;

};

function scrub(e) {
    // console.log(e);
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
};

/* Hook up event listeners */
video.addEventListener('click', togglePlay); // when clicking video
video.addEventListener('play', updateButton); // when video is playing
video.addEventListener('pause', updateButton); // when video is paused
video.addEventListener('timeupdate', handleProgress); // when video is playing and emits timeupdate event

toggle.addEventListener('click', togglePlay); // when clicking play button

skipButtons.forEach(button => button.addEventListener('click', skip)); // when skipping video

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate)); // when adjusting slider
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate)); // when adjusting slider

progress.addEventListener('click', scrub); // when using the progress bar
let mousedown = false;
progress.addEventListener('mousemove', (e) => mousedown && scrub(e)); // when mousedown and mousemove then scrub
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

// TODO: Wire up a fullscreen button