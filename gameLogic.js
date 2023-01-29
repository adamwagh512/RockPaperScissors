screen.orientation.lock("landscape")
// The following variables are counters that keep track of how many games the player has won, lost or tied.
var gamesWon = 0;
var gamesLost = 0;
var gamesTied = 0;
// userChoice keeps track of the user's selection, it will be overwritten every game.
var userChoice = 'rock';
// cpuChoice is an empty string which will be populated during the playGame function
var cpuChoice = '';
// This is an array of all possible game choices.
var choices = [rock, paper, scissors]
// Sets mode - Japanese by default
var mode = 'japanese'
var rock = 'Rock'
var paper = 'Paper'
var scissors = 'Scissors'
// <-------------------------------------------------------------->
// The following section will establish which music to play depending on mood

var japaneseMusic = new Audio ('assets/japanese_music.mp3')
function playJapanese() {
    japaneseMusic.play()
    japaneseMusic.loop = true
}

// The following section handles the switches that occur when mood is changed

if (mode === 'japanese') {
    // Changes background
    document.body.style.backgroundImage = "url('assets/japanese_background.gif')";
    // changes font
    document.getElementById('gameContainer').style.fontFamily = "Gamja Flower, cursive";
    // different background for scoreboard
    document.getElementById('scoreboard').style.backgroundImage = 'linear-gradient(to bottom right, pink, white)';
    // new images for game choices
    rock = 'slug'
    scissors = 'frog'
    paper = 'snake'
    document.getElementById('rockPic').src = 'assets/slug.jpg'
    document.getElementById('paperPic').src = 'assets/snake.jpg'
    document.getElementById('scissorsPic').src = 'assets/frog.jpg'
    document.getElementById('buttonRow').style.backgroundColor = '#F1A5A0';
    
  
    playJapanese()
}




// <----------------------------------------------------------------->
// This is the actual logic for the game. It will determine cpuChoice and compare it to userChoice and determine the outcome.
function playGame() {
// Randomizes cpuChoice
    cpuChoice = choices[Math.floor(Math.random()*choices.length)]
// Win Conditions
    if ((userChoice == 'paper' && cpuChoice == 'rock') || (userChoice == 'rock' && cpuChoice == 'scissors') ||(userChoice == 'scissors' && cpuChoice == 'paper')){
        console.log('Player wins')
        gamesWon++
    }
// Loss Conditions
    else if ((userChoice == 'paper' && cpuChoice == 'scissors')|| (userChoice == 'scissors' && cpuChoice == 'rock') || (userChoice == 'rock' && cpuChoice == 'paper')){
        console.log('CPU wins')
        gamesLost++
    }
// Tie Conditions
    else if((userChoice == 'rock' && cpuChoice == 'rock') || (userChoice == 'scissors' && cpuChoice == 'scissors') || (userChoice == 'paper' && cpuChoice == 'paper')){
        console.log("It's a tie")
        gamesTied++
    }
// Error Conditions
    else {
        console.log('Something is broken, Sorry about that!')
    }
};
// <--------------------------------------------------------------->
// Functions to change the mode.
function turningJapanese() {
    mode = 'japanese'
}


// <--------------------------------------------------------------->
// Controls text content on the page
//
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
// <-------------------------------------------------------------->
// <================================================================>
// This code is being used to debug, should be deleted prior to publishing
playGame()
console.log(cpuChoice)
// console.log('games won: ' + gamesWon)
// console.log('games lost: ' + gamesLost)
// console.log('games tied: ' + gamesTied)