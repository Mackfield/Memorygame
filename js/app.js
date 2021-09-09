const board = document.createElement('ul');
board.className = 'deck'
const content = document.querySelector('.content')
content.appendChild(board)
const card1 = document.createElement('li')
card1.classList.add('card', 'a')
const card2 = document.createElement('li')
card2.classList.add('card', 'a')
const card3 = document.createElement('li')
card3.classList.add('card', 'b')
const card4 = document.createElement('li')
card4.classList.add('card', 'b')
const card5 = document.createElement('li')
card5.classList.add('card', 'c')
const card6 = document.createElement('li')
card6.classList.add('card', 'c')
const card7 = document.createElement('li')
card7.classList.add('card', 'd')
const card8 = document.createElement('li')
card8.classList.add('card', 'd')
const card9 = document.createElement('li')
card9.classList.add('card', 'e')
const card10 = document.createElement('li')
card10.classList.add('card', 'e')
const card11 = document.createElement('li')
card11.classList.add('card', 'f')
const card12 = document.createElement('li')
card12.classList.add('card', 'f')
const card13 = document.createElement('li')
card13.classList.add('card', 'g')
const card14 = document.createElement('li')
card14.classList.add('card', 'g')
const card15 = document.createElement('li')
card15.classList.add('card', 'k')
const card16 = document.createElement('li')
card16.classList.add('card', 'k')
cards = [card1,card2,card3,card4,card5,card6,card7,card8,card9,card10,card11,card12,card13,card14,card15,card16]; // Литеральные классы заменить на названия картинок

shuffle(cards) // Вызывание функции перемешевающей карточки

for(let i=0;i<=cards.length;i++) {
    board.appendChild(cards[i])
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


