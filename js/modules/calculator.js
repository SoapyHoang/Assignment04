// ADD A PRIVATE FUNCTION CALLED CALCULATE
function calculate(x, y, operator) {
    switch(operator) {
        case 'add':
            return x + y
        case 'sub':
            return x - y
        case 'mul':
            return x * y
        case 'div':
            return x / y
    }
}
// ADD FOUR PUBLIC FUNCTIONS BELOW
// ADD FUNCTION
const add = (x,y) => {
    return calculate(x, y, 'add')
}
// SUBTRACT FUNCTION
const subtract = (x,y) => {
    return calculate(x, y, 'sub')
}
// MULTIPLY FUNCTION
const multiply = (x,y) => {
    return calculate(x, y, 'mul')
}
// DIVIDE FUNCTION
const divide = (x,y) => { 
    return calculate(x, y, 'div')
}
// EXPORT THE FOUR PUBLIC FUNCTIONS
export{add, subtract, multiply, divide}