var audio = document.getElementById("audio");
var playPauseButton = document.getElementById("playPauseButton");
var audioFiles = [
{
src: "https://files.catbox.moe/c8eid0.mp3",
artist: "A-Train",
song: "Messages From The Stars"
},
];

var artist = document.getElementById("artist");
var songTitle = document.getElementById("songTitle");

var shuffledAudioFiles = shuffleArray(audioFiles);
var currentAudioIndex = 0;

audio.addEventListener("ended", function() {
    nextAudio();
});

function playMedia() {
    audio.play();
    document.getElementById("overlays").classList.add("fade-out");
}


function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseButton.innerHTML = "<img src='/icon/pause.png'>";
    } else {
        audio.pause();
        playPauseButton.innerHTML = "<img src='/icon/play.png'>";
    }
}

function nextAudio() {
    currentAudioIndex = (currentAudioIndex + 1) % shuffledAudioFiles.length;
    loadAudio(currentAudioIndex);
}

function previousAudio() {
    if (audio.currentTime <= 3) { // If the audio is near the beginning
        currentAudioIndex = (currentAudioIndex - 1 + shuffledAudioFiles.length) % shuffledAudioFiles.length;
    } else { // Otherwise, rewind to the beginning of the current track
        audio.currentTime = 0;
    }
    loadAudio(currentAudioIndex);
}

function loadAudio(index) {
var audioFile = shuffledAudioFiles[index];
audio.src = audioFile.src;
artist.textContent = audioFile.artist;
songTitle.textContent = audioFile.song;
audio.play(); // Auto-play the audio
}

// Function to shuffle array
function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

// Set the src of the audio element to the first shuffled song
audio.src = shuffledAudioFiles[0].src;
audio.play();

loadAudio(0);
