function showRock() {
    document.getElementById('rock').style.display = 'flex'
    lastChance()
};

function showPaper() {
    document.getElementById('paper').style.display = 'flex'
};

function showScissors() {
    document.getElementById('scissors').style.display = 'flex'
};

function showSelectButton() {
    document.getElementById('selectGame').style.display = 'block'
};

function showReadMeButton() {
    document.getElementById('readme').style.display = 'block'
};

setTimeout(showRock, 1000)
setTimeout(showPaper, 2000)
setTimeout(showScissors, 3000)
setTimeout(showSelectButton, 4000)
setTimeout(showReadMeButton, 4000)