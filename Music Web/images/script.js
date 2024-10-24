const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPause');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

const songs = [
    'songs/baarish.mp3',
    'songs/bahubali.mp3',
    'songs/hamsafar.mp3',
    'songs/hip_hop.mp3',
    'songs/ik_vaari_aa.mp3',
    'songs/letmeloveu.mp3'
];

let currentSongIndex = 0;

function loadSong(index) {
    audioPlayer.src = songs[index];
}

function playPauseSong() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.innerHTML = '<i class="fa fa-pause"></i>';
    } else {
        audioPlayer.pause();
        playPauseBtn.innerHTML = '<i class="fa fa-play"></i>';
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
    playPauseBtn.innerHTML = '<i class="fa fa-pause"></i>';
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
    playPauseBtn.innerHTML = '<i class="fa fa-pause"></i>';
}

playPauseBtn.addEventListener('click', playPauseSong);
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);

loadSong(currentSongIndex); // Load the first song initially
