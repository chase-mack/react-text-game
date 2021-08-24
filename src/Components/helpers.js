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
const unarmedAttack = () => {
    boss.health -= 1;
    player.health -= 3;
}
const armedAttack = () => {
    boss.health -= 2;
    player.health -= 3;
}
const strongUnarmedAttack = () => {
    boss.health -= 2;
    player.health -= 2;
}
const strongArmedAttack = () => {
    boss.health -= 3;
    player.health -= 2;
}
const gameOver = () => {
    if (!player.alive || !boss.alive) {
        form.style.display = 'none';
    }
    music.pause();
    ending.play();
}