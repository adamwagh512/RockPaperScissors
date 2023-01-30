// screen.orientation.lock("landscape")
let mode = 'wizard'
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

var frenchMusic = new Audio ('assets/frenchMusic.mp3')
function playFrench() {
    frenchMusic.play()
    frenchMusic.loop = true
}
var wizardMusic = new Audio ('assets/wizardMusic.mp3')
function playWizard() {
    wizardMusic.play()
    wizardMusic.loop = true
}

// <----------------------------------------------------------------->
// The following section handles the switches that occur when mood is changed

if (mode === 'japanese') {
    // Reassign variables from above
    rock = 'slug'
    scissors = 'frog'
    paper = 'snake'
    // Changes background
    document.body.style.backgroundImage = "url('assets/japanese_background.gif')";
    // changes font
    document.getElementById('gameContainer').style.fontFamily = "Gamja Flower, cursive";
    // different background for scoreboard
    document.getElementById('scoreboard').style.backgroundImage = 'linear-gradient(to bottom right, pink, white)';
    // new images for game choices
    document.getElementById('rockPic').src = 'assets/slug.jpg'
    document.getElementById('paperPic').src = 'assets/snake.jpg'
    document.getElementById('scissorsPic').src = 'assets/frog.jpg'
    document.getElementById('buttonRow').style.backgroundColor = '#F1A5A0';
    //changes button 
    document.getElementById('mushiKen').style.backgroundColor = 'black'
    document.getElementById('mushiKen').style.color = 'white'
  
    playJapanese()
}
else if (mode === 'wizard'){
    rock = 'confundus'
    scissors = 'protego'
    paper = 'flipendo'
    document.body.style.backgroundImage = "url('assets/hogwarts.gif')";
    document.getElementById('gameContainer').style.fontFamily = "Cinzel Decorative, cursive";
    document.getElementById('scoreboard').style.backgroundImage = 'linear-gradient(to bottom right, #e9b173, #2c3857)'
    document.getElementById('rockPic').src = 'assets/confundus.jpg'
    document.getElementById('paperPic').src = 'assets/protego.jpg'
    document.getElementById('scissorsPic').src = 'assets/flipendo.jpg'
    document.getElementById('buttonRow').style.backgroundColor = '#e9b173';
    document.getElementById('wizardFight').style.backgroundColor = 'black'
    document.getElementById('wizardFight').style.color = 'white'
    playWizard()
}
else {
    document.getElementById('gameContainer').style.fontFamily = "Nothing You Could do, cursive";
    document.getElementById('gameContainer').style.fontSize = '2vw'
    document.getElementById('buttonRow').style.backgroundColor = '#7c6c39';
    document.getElementById('rochambeau').style.backgroundColor = 'black'
    document.getElementById('rochambeau').style.color = 'white'
    document.getElementById('scoreboard').style.backgroundImage = 'linear-gradient(to bottom right, #9eaac0, #e8e1d0)'
    playFrench()
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
function turningJapanese(mode) {
    mode = 'japanese'
    document.getElementById('mushiKen').style.backgroundColor = 'black'
    console.log(mode)
}

function frenchConnection() {
    mode = ''
}

function yourAWizardHarry() {
    mode = 'wizard'
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
