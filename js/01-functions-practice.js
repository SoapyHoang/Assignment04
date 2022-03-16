//STEP 1
function halfNumber(number) {
    divNum = number / 2 
    console.log(`Half of ${number} is ${divNum}.`);
}
number = Math.floor(Math.random() * 100)
halfNumber(number);

//STEP 2
function squareNumber(number) {
    squareNum = number ** 2
    console.log(`The result of squaring the number ${number} is ${squareNum}.`);
}
number = Math.floor(Math.random() * 10)
squareNumber(number);

//STEP 3
function percentOf(num1, num2) {
    percent = ((num1 / num2) * 100).toFixed(2)
    console.log(`${num1} is ${percent}% of ${num2}.`);
}
num1 = Math.floor(Math.random() * 10)
num2 = Math.floor(Math.random() * 10)
percentOf(num1, num2);

//STEP 4
function findModulus(dividend, divisor) {
    mod = (dividend % divisor)
    console.log(`${mod} is the modulus of ${dividend} and ${divisor}.`);
}
dividend = Math.floor(Math.random() * 100)
divisor = Math.floor(Math.random() * 10)
findModulus(dividend, divisor);

//STEP 5
numbers = prompt('Type in the amount of numbers you wish to sum separated by commas (eg. 1, 2, 3)')
numbersArray = numbers.split(',')

function sumNumbers (arguments) {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) 
        sum += parseFloat(arguments[i])
    return sum 
}
answer = sumNumbers(numbersArray)
console.log(answer)