const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
//console.log(timeNodes);

// .map(parseFloat) converts split string to numbers

const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        const [mins, secs] = timeCode.split(':').map(parseFloat);
        //console.log(mins, secs);
        return (mins * 60) + secs;
    })
    .reduce((total, seconds) => total + seconds);
// This can all be achieved in a single reduce...

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600; // How many seconds are left, after even distribution

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft);
