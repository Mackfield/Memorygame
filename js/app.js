// You can't start game, if you dont click start game button
// As soon as you click start game button, timer starts
// Declaring variables
const cards = document.querySelectorAll('.card');
let icons = []; // array contains pictures of cards
let openedCards = [] // array contains opened cards
const moveAmount = document.querySelector('.moves')
let moveCounter = 0
let check
const resetButton = document.querySelector('.restart')
const stars = document.querySelectorAll('.star')
moveAmount.innerText = moveCounter;
let matchedCards = []
const timerDisplay = document.querySelector('.timer')
let timer = 0
let gameStarted = false;
const gameStartBtn = document.querySelector('.start_game_btn')
const mainMenu = document.querySelector('.wrapper')
const winDialog = document.querySelector('.game_victory')
const playAgainBtn = document.querySelector('.play_again')
resetButton.addEventListener('click', resetGame)
playAgainBtn.addEventListener('click', playAgain)
document.addEventListener('DOMContentLoaded', shuffleCards)
gameStartBtn.addEventListener('click', startGame)

function playAgain() {
    resetGame()
    mainMenu.style.display = 'block';
    winDialog.style.display = 'none';

}

cards.forEach(function (card) {
    let child = card.children[0];
    icons.push(child.className);
    card.addEventListener('click', cardClicked) // displaying card symbol

})

function shuffleCards() {
    icons = shuffle(icons);
    let i = 0;
    cards.forEach(function (card) {

        let child = card.children[0];
        child.className = icons[i];
        i++;

    })
}


function startGame() {
    if (!gameStarted) {
        shuffleCards()
        check = setInterval(gameTime, 1000)
        gameStartBtn.classList.add('started')
        cards.forEach(function (card) {
            card.classList.add('show', 'open')

            function hideIcons() {
                card.classList.remove('show', 'open')
            }

            setTimeout(hideIcons, 2000)
        })
    }
    gameStarted = true;
}


function gameTime() {
    timer++
    timerDisplay.innerText = timer
}
let preventor = 0; // consider renaming and better solution
function cardClicked() {
    if (openedCards.length < 2 && !openedCards.includes(this)  && !this.classList.contains('match')  && gameStarted) { // So you can't click on matched card, on can't match same card
        this.classList.add('open');
        this.classList.add('show');
        openedCards.push(this);
    }
    if (openedCards.length === 2) {
        preventor++
        if (preventor <= 1) { // prevents from adding more than 1 timeout to event planner, so matching works correct
            setTimeout(cardMatch, 1500)
        }
    }
}


function cardMatch() {
    if (openedCards.length === 2 ) {
        let firstCard = openedCards[0];
        let secondCard = openedCards[1];
        let firstCardClass = firstCard.children[0].className
        let secondCardClass = secondCard.children[0].className
        if (firstCardClass === secondCardClass && secondCard.classList.contains('match') === false) {
            firstCard.classList.add('match')
            secondCard.classList.add('match')
            matchedCards.push(firstCard, secondCard)
            openedCards.length = 0
            moveCounter++
        } else {
            openedCards[0].classList.remove('match', 'show', 'open')
            openedCards[1].classList.remove('match', 'show', 'open')
            openedCards.length = 0
            moveCounter++
        }
    }
    setTimeout(gameVictory, 250)
    setTimeout(addMove, 250)
    starsChecker()
    preventor = 0
}

function addMove() {
    moveAmount.innerText = moveCounter
}

function starsChecker() {
    if (moveCounter === 8) {
        stars[2].children[0].className = 'fa fa-star-o'
    }
    if (moveCounter === 12) {
        stars[1].children[0].className = 'fa fa-star-o'
    }
    if (moveCounter === 16) {
        stars[0].children[0].className = 'fa fa-star-o'
    }
}

function resetGame() {
    cards.forEach(function (card) {
        card.classList.remove('match', 'open', 'show')

    })
    gameStarted = false;
    moveCounter = 0
    matchedCards.length = 0
    gameStartBtn.classList.remove('started')
    moveAmount.innerText = moveCounter
    stars[2].children[0].className = 'fa fa-star'
    stars[1].children[0].className = 'fa fa-star'
    stars[0].children[0].className = 'fa fa-star'
    shuffleCards()
    timer = 0;
    clearInterval(check)
    timerDisplay.innerText = 0;
}

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


function gameVictory() {
    if (matchedCards.length === 16) {
        mainMenu.style.display = 'none';
        winDialog.style.display = 'block';
    }
}


