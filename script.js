document.addEventListener('DOMContentLoaded', (event) => {
    const audio = document.getElementById('myAudio');
    const playPauseButton = document.getElementById('playPauseButton');
    let isPlaying = false;

    playPauseButton.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            playPauseButton.textContent = 'Play';
        } else {
            audio.play();
            playPauseButton.textContent = 'Pause';
        }
        isPlaying = !isPlaying;
    });
});
