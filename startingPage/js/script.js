//This script is meant to ask four questions and display text and answers for those questions

/* //Create a funtion to ask the four questions
function fourQuestions(){
    let name = window.prompt("What is your name: " , "");
    let junk = window.prompt("What is your favorite guilty pleasure food: " , "");
    let music = window.prompt("What is your favorite genre of music: " , "");
    let talent = window.prompt("What is your special talent: " , "");
    
    var outputStr
    outputStr = "<p>Your name is " + name + "</p>";
    outputStr += "<p>Your guilty pleasure Food is " + junk + "</p>";
    outputStr += "<p>Your favorite genre of music is " + music + "</p>";
    outputStr += "<p>Your special talent is " + talent + "</p>"; 

    document.getElementById("displayArea").innerHTML = outputStr;
} */

//Create the changeText function
function changeText(){
    let name = window.prompt("What is your name: ");
    let occupation = window.prompt("What is your occupation: ");
    let school = window.prompt("What is your School: ");

    var outputStr;
    outputStr = "<p>Your name is " + name + ". My occupation is a " + occupation + 
    ". My School is " + school + ".</p>";

    document.getElementById("displayArea").innerHTML = outputStr;
}

function showImg(){
    document.getElementById("displayArea").innerHTML = '<img src="images/randomImg.jpeg" alt="No Maidens?">';
}

function callMath(){
    let n1 = window.prompt("Enter a Number: ");
    let n2 = window.prompt("Enter a second Number: ");

    doMath(n1, n2);
}

function doMath(n1, n2){
    let sum = n1 + n2;
    let prod = n1 * n2;
    let quot = n1 / n2;
    let diff = n1 - n2;
    let rem = n1 % n2;

    let outputStr = "<p>" + n1 + " + " + n2 + " = " + sum + "</p>" +
    "<p>" + n1 + " * " + n2 + " = " + prod + "</p>" +
    "<p>" + n1 + " / " + n2 + " = " + quot + "</p>" +
    "<p>" + n1 + " - " + n2 + " = " + diff + "</p>" +
    "<p>" + n1 + " % " + n2 + " = " + rem + "</p>";

    document.getElementById("displayArea").innerHTML = outputStr;

}