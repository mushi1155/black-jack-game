let cards= []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEL= document.getElementById("message-el")
let sumEL= document.getElementById("sum-el")
let cardsEL= document.getElementById("cards-el")
let player = {
    name: "Mush",
    chips: 155
}
let playerEL= document.getElementById("player-el")
playerEL.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let number = Math.floor( Math.random()*13 + 1)
    if (number> 10){
        return 10
    }
    else if(number===1){
        return 11
    }
    else{
        return number

    }
    
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
    cardsEL.textContent= "Cards: "
    for (let i=0 ; i<cards.length;i++){
        cardsEL.textContent += cards[i] + " "
    }
    sumEL.textContent= "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
    messageEL.textContent=message

}

function newCard(){
    if (isAlive===true && hasBlackJack===false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()

    }
   
}

