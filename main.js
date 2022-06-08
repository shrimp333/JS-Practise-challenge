const sounds = [
new Audio("./assets/sounds/boom.wav"),
new Audio("./assets/sounds/clap.wav"),
new Audio("./assets/sounds/hihat.wav"),
new Audio("./assets/sounds/kick.wav"),
new Audio("./assets/sounds/openhat.wav"),
new Audio("./assets/sounds/ride.wav"),
new Audio("./assets/sounds/snare.wav"),
new Audio("./assets/sounds/tink.wav"),
new Audio("./assets/sounds/tom.wav")
]

let recording = false;
let playing = false;
let recordSequence = [];
let speed = 1000;
const speedLabel = document.getElementById("speedLabel")
play = (i) => {
    if (recording) {
        recordSequence.push(i);
    }
    sounds[i].play();
}
playSequence = () => {
    if (!playing)
        return;
    recording = false;
    for (let i = 0; i <= recordSequence.length; i++) {
        setTimeout(() => {
            play(recordSequence[i]);
        }, speed * i);
    }
}
setInterval(playSequence, 5000);
startLoop = () => {
    playing = true;
    recording = false;
}
endLoop = () => {
    playing = false;
    recording = false;
}
record = () => {
    recordSequence = [];
    recording = true;
}
displayLabel = () =>{
    speedLabel.innerHTML = `Delay: ${speed/1000}s`;
}
faster = () => {
    if (speed == 100)
        return;
    speed -= 100;
    displayLabel();
}
slower = () => {
    speed += 100;
    displayLabel();
}
normalSpeed = () => {
    speed = 1000;
    displayLabel();
}