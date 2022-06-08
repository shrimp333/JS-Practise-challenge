const sounds = [
    "./assets/sounds/boom.wav",
    "./assets/sounds/clap.wav",
    "./assets/sounds/hihat.wav",
    "./assets/sounds/kick.wav",
    "./assets/sounds/openhat.wav",
    "./assets/sounds/ride.wav",
    "./assets/sounds/snare.wav",
    "./assets/sounds/tink.wav",
    "./assets/sounds/tom.wav"
]

let recording = false;
let playing = false;
let recordSequence = [];
let speed = 1000;
let loopInterval = 1000;
const speedLabel = document.getElementById("speedLabel")

play = (i) => {
    if (recording) {
        recordSequence.push(i);
    }
    sound = new Audio(sounds[i]);
    sound.play();
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
setInterval(playSequence, loopInterval);
startLoop = () => {
    playing = true;
    recording = false;
    calcIntervalDelay();
}
endLoop = () => {
    playing = false;
    recording = false;
}
record = () => {
    recordSequence = [];
    recording = true;
}
displayLabel = () => {
    speedLabel.innerHTML = `Delay: ${speed / 1000}s`;
}
faster = () => {
    if (speed == 100)
        return;
    speed -= 100;
    calcIntervalDelay();
    displayLabel();
}
slower = () => {
    speed += 100;
    displayLabel();
    calcIntervalDelay();
}
normalSpeed = () => {
    speed = 1000;
    displayLabel();
    calcIntervalDelay();
}
calcIntervalDelay = () => {
    // loopInterval = speed * recordSequence.length;
}