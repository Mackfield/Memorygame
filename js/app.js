const cards = document.querySelectorAll('.card');
let icons = [];
let openedCards = []

cards.forEach(function (card) {
    let child = card.children[0];
    icons.push(child.className)
    card.addEventListener('click', cardClicked)

})
document.addEventListener('DOMContentLoaded', shuffleCards)

function shuffleCards() {
    icons = shuffle(icons);
    let i = 0;
    cards.forEach(function (card) {

        let child = card.children[0];
        child.className = icons[i];
        i++;

    })
}

function cardClicked() {

    if (openedCards.length < 2 && openedCards.includes(this) === false) {
        this.classList.add('open');
        this.classList.add('show');
        openedCards.push(this);


    }
    setTimeout(cardMatch, 1500)
}

function cardMatch() {

    if (openedCards.length === 2) {
        let firstCard = openedCards[0];
        let secondCard = openedCards[1];
        let firstCardClass = firstCard.children[0].className
        let secondCardClass = secondCard.children[0].className
        if (firstCard != secondCard) {
            if (firstCardClass === secondCardClass) {
                firstCard.classList.add('match')
                secondCard.classList.add('match')
                openedCards.length = 0
            } else {
                openedCards[0].classList.remove('match', 'show', 'open')
                openedCards[1].classList.remove('match', 'show', 'open')
                openedCards.length = 0
            }
        }
    }
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


