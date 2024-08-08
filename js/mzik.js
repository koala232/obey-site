var audio = document.getElementById("audio");
var playPauseButton = document.getElementById("playPauseButton");
var audioFiles = [
{
src: "https://files.catbox.moe/nk4w2g.mp3",
artist: "Freddie Dredd",
song: "Frank Miller (Kill Again)"
},
{
src: "https://files.catbox.moe/hg38sh.mp3",
artist: "MAKAVELIGODD",
song: "Harakiri"
},
{
src: "https://files.catbox.moe/elbjvs.mp3",
artist: "Ghostemane",
song: "Andromeda"
},
{
src: "https://files.catbox.moe/mjbxka.mp3",
artist: "Ghostemane",
song: "FairWeatherFanz"
},
{
src: "https://files.catbox.moe/0c56ti.mp3",
artist: "Afourteen",
song: "USA"
},
{
src: "https://files.catbox.moe/62px76.mp3",
artist: "Broly500!",
song: "gave_her_soul/SUPER SLATT++ leak (icytwat Remix)"
},
{
src: "https://files.catbox.moe/skikkm.mp3",
artist: "Yeat",
song: "Wat U Want 2"
},
{
src: "https://files.catbox.moe/bnm7v9.mp3",
artist: "LIL DARKIE",
song: "METHHEAD FREESTYLE (FT. SPIDER GANG & FRIENDS)"
},
{
src: "https://files.catbox.moe/zsnzc9.mp3",
artist: "BONES",
song: "GoHardHuh"
},
{
src: "https://files.catbox.moe/go6l73.mp3",
artist: "HAARPER",
song: "GROWTH STUNT"
},
{
src: "https://files.catbox.moe/jatvxa.mp3",
artist: "BONES",
song: "Weather Man"
},
{
src: "https://files.catbox.moe/uzvgme.mp3",
artist: "6 Dogs",
song: "Mazi Love"
},
{
src: "https://files.catbox.moe/idwajf.mp3",
artist: "$UICIDEBOY$",
song: "I Deleted Facebook a Long Time Ago"
},
{
src: "https://files.catbox.moe/ko6sq4.mp3",
artist: "SEMATARY",
song: "PAIN"
},
{
src: "https://files.catbox.moe/zoupx5.mp3",
artist: "MAKAVELIGODD",
song: "GOOSEBUMPS!"
},
{
src: "https://files.catbox.moe/s0n3kf.mp3",
artist: "SEMATARY",
song: "COP KILLER (FT. GHOST MOUNTAIN)"
},
{
src: "https://files.catbox.moe/fka4xx.mp3",
artist: "Powers Pleasant",
song: "Evil Twin feat. Denzel Curry & ZillaKami"
},
{
src: "https://files.catbox.moe/en6l8m.mp3",
artist: "Nascar Aloe",
song: "Find Me"
},
{
src: "https://files.catbox.moe/gpahcr.mp3",
artist: "Nascar Aloe",
song: "DEGENERATE FUCK"
},
{
src: "https://files.catbox.moe/gpahcr.mp3",
artist: "Nascar Aloe",
song: "DEGENERATE FUCK"
},
{
    src: "https://files.catbox.moe/w7r9ow.mp3",
    artist: "HACKLE",
    song: "GUNSMITH"
}
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
