// IMPORT THE MODULE
import * as calc from './modules/calculator.js'

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION
let x, y, calcOperation

do { 
    x = parseInt(prompt('Enter the first number you want to calculate'))
    console.log(x)

    y = parseInt(prompt('Enter the second number you want to calculate'))
    console.log(y)

    calcOperation = prompt('What type of operation do you want to perform? (add, subtract, multiply, divide)')
    console.log(calcOperation)

    switch(calcOperation) { 
        case 'add':
            alert((calc.add(x,y)))
            break 
        case 'subtract':
            alert((calc.subtract(x,y)))
            break 
        case 'multiply':
            alert((calc.multiply(x,y)))
            break 
        case 'divide':
            alert((calc.divide(x,y)))
            break 
    }

    
    if (calcOperation == null || calcOperation != 'add' && calcOperation != 'subtract' && calcOperation != 'multiply' && calcOperation != 'divide')
    {
        alert('Please enter add, subtract, multiply, or divide')
    }
} while (calcOperation == null || calcOperation != 'add' && calcOperation != 'subtract' && calcOperation != 'multiply' && calcOperation != 'divide')
