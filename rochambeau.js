var gamesWon = 0;
var gamesLost = 0;
var gamesTied = 0;

var rock = 'Rock'
var paper = 'Paper'
var scissors = 'Scissors'

var frenchMusic = new Audio ('assets/frenchMusic.mp3')
function playFrench() {
    frenchMusic.play()
    frenchMusic.loop = true
}
    document.body.style.backgroundImage = "url('assets/french_background.gif')";
    document.getElementById('gameContainer').style.fontFamily = "Nothing You Could do, cursive";
    document.getElementById('gameContainer').style.fontSize = '2vw'
    document.getElementById('buttonRow').style.backgroundColor = '#7c6c39';
    document.getElementById('rochambeau').style.backgroundColor = 'black'
    document.getElementById('rochambeau').style.color = 'white'
    document.getElementById('scoreboard').style.backgroundImage = 'linear-gradient(to bottom right, #9eaac0, #e8e1d0)'
    playFrench()

// Controls text content on page
document.getElementById('rockName').innerHTML = rock
document.getElementById('rockBeats').innerHTML = rock + ' beats ' + scissors
document.getElementById('beatsRock').innerHTML = paper + ' beats ' + rock
//
document.getElementById('paperName').innerHTML = paper
document.getElementById('paperBeats').innerHTML = paper + ' beats ' + rock
document.getElementById('beatsPaper').innerHTML = scissors + ' beats ' + paper
//
document.getElementById('scissorsName').innerHTML = scissors
document.getElementById('scissorsBeats').innerHTML = scissors + ' beats ' + paper
document.getElementById('beatsScissors').innerHTML = rock + ' beats ' + scissors
var choices = [rock, paper, scissors]
var userChoice = paper;
var cpuChoice = rock;
// <-------------------------------------------------------------->
// This is the actual logic for the game. It will determine cpuChoice and compare it to userChoice and determine the outcome.
function playGame() {
// Randomizes cpuChoice
    console.log('user chose: ' + userChoice)
    cpuChoice = choices[Math.floor(Math.random()*choices.length)]
    console.log('computer chose: ' + cpuChoice)
// Win Conditions
    if ((userChoice == paper && cpuChoice == rock) || (userChoice == rock && cpuChoice == scissors) ||(userChoice == scissors && cpuChoice == paper)){
        alert('🎉Congratulations, you won!')
        gamesWon++
        document.getElementById('gamesWon'). innerHTML = 'Games Won : ' + gamesWon
    }
// Loss Conditions
    else if ((userChoice == paper && cpuChoice == scissors)|| (userChoice == scissors && cpuChoice == rock) || (userChoice == rock && cpuChoice == paper)){
        alert('😞 Sorry, you lose')
        gamesLost++
        document.getElementById('gamesLost'). innerHTML = 'Games Lost : ' + gamesLost
    }
// Tie Conditions
    else if((userChoice == rock && cpuChoice == rock) || (userChoice == scissors && cpuChoice == scissors) || (userChoice == paper && cpuChoice == paper)){
        alert("😑 It's a tie")
        gamesTied++
        document.getElementById('gamesTied'). innerHTML = 'Games Tied : ' + gamesTied
    }
// Error Conditions
    else {
        console.log('Something is broken, Sorry about that!')
    }
};

// <-------------------------------------------------------------->
//
function playerChoosesRock() {
    userChoice = rock
    playGame()
}

function playerChoosesPaper() {
    userChoice = paper
    playGame()
}

function playerChoosesScissors() {
    userChoice = scissors
    playGame()
}

//event listeners for pictures
rockPic.addEventListener('click', playerChoosesRock)
paperPic.addEventListener('click', playerChoosesPaper)
scissorsPic.addEventListener('click', playerChoosesScissors)

