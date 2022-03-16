let userChoice = prompt('Enter rock, paper, or scissors.')

let compChoice = Math.random()
if (compChoice < 0.33) {
    compChoice = 'rock'
} else if (compChoice <= 0.66) {
    compChoice = 'paper'
} else {
    compChoice = 'scissors'
}

let compare = function(userChoice, compChoice) {
    if (userChoice === compChoice) {
        alert('Its a tie!')
    }
}

if (userChoice != null && userChoice.toLowerCase() == 'rock' || userChoice.toLowerCase() == 'paper' || userChoice.toLowerCase() == 'scissors') {
    if (userChoice.toLowerCase() == 'rock') {
        if (compChoice == 'scissors') {
            alert('You have won!')
        } else {
            if (compChoice == 'paper') {
                alert('Sorry, the computer has won :(')
            }
        }
    }
    if (userChoice.toLowerCase() == 'paper') {
        if (compChoice == 'rock') {
            alert('You have won!')
        } else {
            if (compChoice == 'scissors') {
                alert('Sorry, the computer has won :(')
            }
        }
    }
    if (userChoice.toLowerCase() == 'scissors') {
        if (compChoice == 'paper') {
            alert('You have won!')
        } else { 
            if (compChoice == 'rock') {
                alert('Sorry, the computer has won :(')
            }
        }
    }
} else { 
    alert('Hey, enter rock, paper, or scissors.')
}
console.log(userChoice)
console.log(compChoice)
compare(userChoice, compChoice)

