const showPlayer = () => {
    currentLocation.appendChild(playerOnMap);
    walking.play();
}
const openDoor = () => {
    setTimeout(function () {
        doorOpen.play();
    }, 1500);
}
const tryLockedDoor = () => {
    setTimeout(function () {
        locked.play();
    }, 1500);
}
const gameOver = () => {
    if (!player.alive || !boss.alive) {
        form.style.display = 'none';
    }
    music.pause();
    ending.play();
}