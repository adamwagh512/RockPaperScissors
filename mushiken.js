var gamesWon = 0;
var gamesLost = 0;
var gamesTied = 0;
// This code enables music for the Mushi-ken game
var japaneseMusic = new Audio ('assets/japanese_music.mp3')
function playJapanese() {
    japaneseMusic.play()
    japaneseMusic.loop = true
}
japaneseMusic.play()

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

