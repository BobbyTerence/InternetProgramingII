function doMath() {
    var num1, num2, sum, diff, prod, quot, rem, output;
    
    //Assign values to number variables
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;

    //Do the math babey
    sum = num1 + num2;
    diff = num1 - num2;
    prod = num1 * num2;
    quot = num1 / num2;
    rem = num1 % num2;

    output = "<p>" + num1 + " + " + num2 + " = " + sum + "</p>";
    output += "<p>" + num1 + " - " + num2 + " = " + diff + "</p>";
    output += "<p>" + num1 + " * " + num2 + " = " + prod + "</p>";
    output += "<p>" + num1 + " / " + num2 + " = " + quot.toFixed(2) + "</p>";
    output += "<p>" + num1 + " % " + num2 + " = " + rem + "</p>";

    //Display
    document.getElementById("displayArea").innerHTML = output;
}

function doNumbers() {
    var num1, num2, sum, diff, prod, quot, rem, output;
    
    //Assign values to number variables
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;

    //Do the math babey
    sum = Number(num1) + Number(num2);
    diff = Number(num1) - Number(num2);
    prod = Number(num1) * Number(num2);
    quot = Number(num1) / Number(num2);
    rem = Number(num1) % Number(num2);

    output = "<p>" + num1 + " + " + num2 + " = " + sum + "</p>";
    output += "<p>" + num1 + " - " + num2 + " = " + diff + "</p>";
    output += "<p>" + num1 + " * " + num2 + " = " + prod + "</p>";
    output += "<p>" + num1 + " / " + num2 + " = " + quot.toFixed(2) + "</p>";
    output += "<p>" + num1 + " % " + num2 + " = " + rem + "</p>";

    //Display
    document.getElementById("displayArea").innerHTML = output;
}

function doInt() {
    var num1, num2, sum, diff, prod, quot, rem, output;
    
    //Assign values to number variables
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;

    //Do the math babey
    sum = parseInt(num1) + parseInt(num2);
    diff = parseInt(num1) - parseInt(num2);
    prod = parseInt(num1) * parseInt(num2);
    quot = parseInt(num1) / parseInt(num2);
    rem = parseInt(num1) % parseInt(num2);

    output = "<p>" + num1 + " + " + num2 + " = " + sum + "</p>";
    output += "<p>" + num1 + " - " + num2 + " = " + diff + "</p>";
    output += "<p>" + num1 + " * " + num2 + " = " + prod + "</p>";
    output += "<p>" + num1 + " / " + num2 + " = " + quot.toFixed(2) + "</p>";
    output += "<p>" + num1 + " % " + num2 + " = " + rem + "</p>";

    //Display
    document.getElementById("displayArea").innerHTML = output;
}

function doFloat() {
    var num1, num2, sum, diff, prod, quot, rem, output;
    
    //Assign values to number variables
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;

    //Do the math babey
    sum = parseFloat(num1) + parseFloat(num2);
    diff = parseFloat(num1) - parseFloat(num2);
    prod = parseFloat(num1) * parseFloat(num2);
    quot = parseFloat(num1) / parseFloat(num2);
    rem = parseFloat(num1) % parseFloat(num2);

    output = "<p>" + num1 + " + " + num2 + " = " + sum + "</p>";
    output += "<p>" + num1 + " - " + num2 + " = " + diff + "</p>";
    output += "<p>" + num1 + " * " + num2 + " = " + prod + "</p>";
    output += "<p>" + num1 + " / " + num2 + " = " + quot.toFixed(2) + "</p>";
    output += "<p>" + num1 + " % " + num2 + " = " + rem + "</p>";

    //Display
    document.getElementById("displayArea").innerHTML = output;
}

function doAverage() {
    var num1, num2, num3, average, output;

    //Assign values to variables
    num1 = document.getElementById("score1").value;
    num2 = document.getElementById("score2").value;
    num3 = document.getElementById("score3").value;

    //Calculate the average
    average = (Number(num1) + Number(num2) + Number(num3))/3;

    //Display the average
    output = "<p>Test 1: " + num1 + "</p>";
    output += "<p>Test 2: " + num2 + "</p>";
    output += "<p>Test 3: " + num3 + "</p>";
    output += "<p>Average Test Score: " + average.toFixed(2) + "</p>";

    document.getElementById("displayArea").innerHTML = output;
 }

 function clearForm() {
    var score1, score2, score3, outStr;

    score1 = "";
    score2 = "";
    score3 = "";

    outStr = "<p>Scores and Average goes Here:</p>";

    document.getElementById("score1").value = score1;
    document.getElementById("score2").value = score2;
    document.getElementById("score3").value = score3;
    document.getElementById("displayArea").innerHTML = outStr;
 }