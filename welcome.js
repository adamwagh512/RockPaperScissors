let mySound = new Audio('assets/thud.mp3')
let menuMusic = new Audio('assets/menu_music.mp3')

function playMusic(){
    menuMusic.play()
}
function showRock() {
    document.getElementById('rock').style.display = 'flex'
    mySound.play()
};

function showPaper() {
    document.getElementById('paper').style.display = 'flex'
    mySound.play()
};

function showScissors() {
    document.getElementById('scissors').style.display = 'flex'
    mySound.play()
};

function showSelectButton() {
    document.getElementById('selectGame').style.display = 'block'
};

function showReadMeButton() {
    document.getElementById('readme').style.display = 'block'
};

setTimeout(showRock, 1000)
setTimeout(showPaper, 2500)
setTimeout(showScissors, 4000)
setTimeout(showSelectButton, 4000)
setTimeout(showReadMeButton, 4000)
setTimeout(playMusic, 4500)