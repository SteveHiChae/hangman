const prompt = require('prompt-sync')()  // for node test 

let playerName = prompt("What's your name? ")
if (!playerName) {
    // alert('Please enter your name')
    console.log('Please enter your name')
} else {
    // alert('Thank you, Mr. ' + playerName)
    console.log('Hi, ' + playerName)
}

// function gameStart() {
//     let words = ['apple', 'banana', 'strawberry']
//     let randomWord = randomWordGenerator()
//     let randomWordUnderbar = randomWordUnderbarGenerator(randomWord.length) 
// }

let randomWord = randomWordGenerator()
let randomWordUnderbar = randomWordUnderbarGenerator(randomWord.length) 

function randomWordGenerator() {
    let words = ['apple', 'banana', 'strawberry']
    return words[Math.floor(Math.random() * words.length)]
}

function randomWordUnderbarGenerator(length) {
    let randomWordUnderbar = '' 
    for (let i=0; i<length; i++) randomWordUnderbar += '*'
    return randomWordUnderbar

}

// alert(`Guess ${randomWord.length} letters word ${randomWordUnderbar}`)
console.log(`Guess ${randomWord.length} letters word ${randomWordUnderbar}`)

let guessLetter = ""
do { 
    guessLetter = prompt("What's your guess? Please enter a letter ")
    let foundIt = findAllLetters(randomWord, guessLetter)
    if (foundIt.length === 0) {
        // alert(`Sorry! there is no ${guessLetter} letter`)
        console.log(`Sorry! there is no ${guessLetter} letter`)
    } else {
        for (let i=0; i<foundIt.length; i++) {
            randomWordUnderbar = replace(randomWordUnderbar, foundIt[i], guessLetter)
        }
        console.log(randomWordUnderbar)
    }

    if (randomWord === randomWordUnderbar) {
        console.log(`Bingo! ${playerName}, you got it!`)
        break
    }
    console.log(guessLetter)
} while (guessLetter) // while it is not empty

console.log('End of Program')

// using indexOf and while loop are rather complicated. Isn't better to use just for loop?
function findAllLetters(source, letter) {
    let indexArray = []
    let found = -1

    do {
        found = source.indexOf(letter, found + 1)
        if (found >= 0) indexArray.push(found)
    } while (found >= 0) 
    return indexArray 
}

function replace(source, idx, char) {
    return source.substring(0, idx) + char + source.substring(idx+1)  
}

// for the test
// source = 'apple'
// letter = 'l'
// let howMany = findAllLetters(source, letter)
// console.log(source, letter)
// console.log(howMany)

// let test = '*****'
// for (let i=0; i<howMany.length; i++) {
//     test = replace(test, howMany[i], letter)
// }
// console.log(test)
