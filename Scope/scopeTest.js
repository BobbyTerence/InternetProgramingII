var testVal = 0;
var outputStr = "";
var attempts = 0;

function generateNum() {
    attempts = 0;
    testVal = Math.floor(Math.random() * 100);
    outputStr = "";

    document.getElementById("higher-lower").innerHTML = outputStr;
}

function submitGuess() {
    let guess = document.getElementById("user-guess").value;
    let compare = testVal;
    let correct = false;

    if(attempts < 7){
        if(guess == compare) {
            outputStr += "<p>Your guess is correct!</p>";
            correct = true; 
            attempts = 7
        }
        else if(guess < compare) {
            outputStr += "<p>" + guess + " &uarr; Higher</p>";
            attempts += 1;
        }
        else if(guess > compare) {
            outputStr += "<p>" + guess + " &darr; Lower";
            attempts += 1;
        }
    }    

    if (correct == false && attempts == 7) {
        outputStr += "<p>The number was " + compare + ", please press the button and try again.</p>";
    }    

    if(attempts < 7) {
        document.getElementById("higher-lower").innerHTML = outputStr;
    }
    else if (attempts == 7){
        document.getElementById("higher-lower").innerHTML = outputStr;
        attempts = 8;
    }
}