//Create a global variable to contain the number of correct and incorrect answers
var correct = 0;
var incorrect = 0;


/**
 * this function generates two random numbeer for addition
 */
function mathAdd() {
    //Generate random numbers
    let num1 = Math.floor(Math.random() * 12 + 1);
    let num2 = Math.floor(Math.random() * 12 + 1);

    //Find the correct answer
    let answer = Number(num1) + Number(num2);

    document.getElementById("add1").value = num1;
    document.getElementById("add2").value = num2
    document.getElementById("add-answer").value = answer;
}

/**
 * this function generates two random numbeer for subtraction
 */
function mathSub() {
    //Generate random numbers
    let num1 = Math.floor(Math.random() * 12 + 1);
    let num2 = Math.floor(Math.random() * 12 + 1);

    //Find the correct answer
    let answer = Number(num1) - Number(num2);

    document.getElementById("sub1").value = num1;
    document.getElementById("sub2").value = num2
    document.getElementById("sub-answer").value = answer;
}

/**
 * this function generates two random numbeer for multiplication
 */
function mathMult() {
    //Generate random numbers
    let num1 = Math.floor(Math.random() * 12 + 1);
    let num2 = Math.floor(Math.random() * 12 + 1);

    //Find the correct answer
    let answer = Number(num1) * Number(num2);

    document.getElementById("mult1").value = num1;
    document.getElementById("mult2").value = num2
    document.getElementById("mult-answer").value = answer;
}

/**
 * this function generates two random numbeer for division
 */
function mathDiv() {
    //Generate random numbers
    let num1 = Math.floor(Math.random() * 12 + 1);
    let num2 = Math.floor(Math.random() * 12 + 1);

    //Find the correct answer
    let answer = Number(num1) / Number(num2);

    document.getElementById("div1").value = num1;
    document.getElementById("div2").value = num2
    document.getElementById("div-answer").value = answer;
}

/** 
 * Function to compare the answer to input answer for all but division
 * @param {*} answer 
 * @param {*} inputAnswer 
 * @param {*} ele 
 */
function compare(answer, inputAnswer, ele) {
    //Compare the answers
    if (Number(answer) == Number(inputAnswer)) {
        correct += 1;

        //Give an additional prompt when answered correctly
        if(ele.id == "add-btn") {
            mathAdd();
            document.getElementById("add-input").value = '';
        }
        else if(ele.id == "sub-btn") {
            mathSub();
            document.getElementById("sub-input").value = '';
        }
        else if(ele.id == "mult-btn") {
            mathMult();
            document.getElementById("mult-input").value = '';
        }
    }
    else if (Number(answer) < Number(inputAnswer) || Number(answer) > Number(inputAnswer)) {
        incorrect += 1;
    }   

    updateDisplay();
}

/**
 * Had to make a seperate function so that I could use parseFloat on the division answers
 * @param {*} answer 
 * @param {*} inputAnswer 
 * @param {*} ele 
 */
function compareDiv(answer, inputAnswer, ele) {
    if (parseFloat(answer).toFixed(2) == parseFloat(inputAnswer).toFixed(2)) {
        correct += 1;

        mathDiv();        
        document.getElementById("div-input").value = '';
    }
    else if (parseFloat(answer).toFixed(2) < parseFloat(inputAnswer).toFixed(2) || parseFloat(answer).toFixed(2) > parseFloat(inputAnswer).toFixed(2)) {
        incorrect += 1;
    }

    updateDisplay();
}

/**
 * This function updates the display-area to the correct values
 */
function updateDisplay() {
    var output;
    var precentage, totalAnswers;

    totalAnswers = Number(correct) + Number(incorrect);
    percentage = (Number(correct) / Number(totalAnswers)) * 100; 

    output = "<p>Correct Answers: " + Number(correct) + "</p>";
    output += "<p>Incorrect Answers: " + Number(incorrect) + "</p>";
    output += "<p>Percentage correct: " + Number(percentage).toFixed(2) + "%</p>";

    document.getElementById("display-area").innerHTML = output;
}

/**
 * This function is meant to clear all input from the form
 */
function clearForm() {
    let empty = '';
    document.getElementById("math-problems").reset();
}

/**
 * This function clears the form and resets the display area and the correct and incorrect count
 */
function resetForm() {
    let empty = '';

    document.getElementById("math-problems").reset();

    document.getElementById("display-area").innerHTML = empty;

    incorrect = 0;
    correct = 0;
}