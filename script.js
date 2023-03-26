let calcDisplay = document.querySelector('#calc-display')
let numButton = document.querySelectorAll('.number-button')
let operationButton = document.querySelectorAll('.operation-button')
let equalsButton = document.querySelector('.equals-button')
let resetButton = document.querySelector('.reset-button')

//this looks at the number button that is pushed, grabs its value and displays it on the calculator screen
numButton.forEach(function(numBtn) {
    numBtn.addEventListener('click', function(press){
        let value = press.target.innerText 
        calcDisplay.innerText += value 
    })
})

//this looks at the operator button that is pushed, grabs its value and displays it on the calculator screen
operationButton.forEach(function(opBtn) {
    opBtn.addEventListener('click', function(press){
        let value = press.target.innerText 
        if(press.target.innerText  == `sqrt`){
            calcDisplay.innerText = Math.sqrt(calcDisplay.innerText).toFixed(9);
        }
        else if(press.target.id  == 'sqr'){
            calcDisplay.innerText = eval(calcDisplay.innerText) *eval(calcDisplay.innerText);
        }
        else if(press.target.innerText  == 'tan'){
            calcDisplay.innerText = Math.tan(calcDisplay.innerText).toFixed(9);
        }
        else if(press.target.innerText  == '%'){
            calcDisplay.innerText = (calcDisplay.innerText/100);
        }
        else {
        calcDisplay.innerText += value 
        }
    })
})

//this looks at the equals button when it is pushed, evaluates the buttons pushed first, them tries to evaluate the answer, if an error is thrown in the console then a message is displayed
equalsButton.addEventListener('click', function() {
    try {
    let answer = eval(calcDisplay.innerText)
        if (answer.toString().length >= 10) {
            calcDisplay.innerText = answer.toExponential(7)
        } else {
            calcDisplay.innerText = answer
        } 
    } catch (error) {  
        console.log(error)
        calcDisplay.style.fontSize = '30px' 
        calcDisplay.innerText = 'Error: Please enter valid number or operator in correct sequence' 
    }      
});

//this looks at the reset button and clears out the calculator screen
resetButton.addEventListener('click', function() {
    calcDisplay.innerText = '' 
})


