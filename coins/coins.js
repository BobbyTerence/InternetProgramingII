function convertPennies() {
    //Declare constants for doing math
    const DOLLAR = 100;
    const QUARTER = 25;
    const DIME = 10;
    const NICKLE = 5;

    //Grab the value you are converting from, from the form
    let pennies = document.getElementById("pennies").value;

    //Total number of dollars
    let dollar = parseInt(pennies) / parseInt(DOLLAR);
    pennies = parseInt(pennies) % parseInt(DOLLAR);
    //Display it
    let dollarDisplay = "<p>" + dollar + "</p>";
    let testValue = "My Brother in Christ, what do you mean this is null???";
    document.getElementById("dollar-display").innerHTML = testValue.toString();

    //Total number of quarters
    let quarter = parseInt(pennies) / parseInt(QUARTER);
    pennies = parseInt(pennies) % parseInt(QUARTER);
    //Display it
    let quarterDisplay = "<p id='label'>" + quarter + "</p>";
    document.getElementById("quarter-display").innerHTML = quarterDisplay;

    //Total number of dimes
    let dime = parseInt(pennies) / parseInt(DIME);
    pennies = parseInt(pennies) % parseInt(DIME);
    //Display it
    let dimeDisplay = "<p id='label'>" + dime + "</p>";
    document.getElementById("dime-display").innerHTML = dimeDisplay;

    //Total number of nickles
    let nickle = parseInt(pennies) / parseInt(NICKLE);
    //Display it
    let nickleDisplay = "<p id='label'>" + nickle + "</p>";
    document.getElementById("nickle-display").innerHTML = nickleDisplay;
    //This is the remaining numbere of pennies
    pennies = parseInt(pennies) % parseInt(NICKLE);
    //Display it
    let pennyDisplay = "<p id='label'>" + penny + "</p>";
    document.getElementById("penny-display").innerHTML = pennyDisplay;
}

function clearForm() {
    document.getElementById("pennies").value = "";
}