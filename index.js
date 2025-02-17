let firstCard = 10
let secondCard = 4
let cards = [firstCard,secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEL= document.getElementById("message-el")
let sumEL= document.getElementById("sum-el")
let cardsEL= document.getElementById("cards-el")


// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.
function startGame(){
    renderGame()
}
function renderGame(){
    cardsEL.textContent= "Cards: " + cards[0] +"," + cards[1]
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
    let card = 7
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}

