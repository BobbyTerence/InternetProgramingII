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
    let dollarDisplay = "<h3 id='label'>" + parseInt(dollar) + "</h3>";
    document.getElementById("dollar-display").innerHTML = dollarDisplay;

    //Total number of quarters
    let quarter = parseInt(pennies) / parseInt(QUARTER);
    pennies = parseInt(pennies) % parseInt(QUARTER);
    //Display it
    let quarterDisplay = "<h3 id='label'>" + parseInt(quarter) + "</h3>";
    document.getElementById("quarter-display").innerHTML = quarterDisplay;

    //Total number of dimes
    let dime = parseInt(pennies) / parseInt(DIME);
    pennies = parseInt(pennies) % parseInt(DIME);
    //Display it
    let dimeDisplay = "<h3 id='label'>" + parseInt(dime) + "</h3>";
    document.getElementById("dime-display").innerHTML = dimeDisplay;

    //Total number of nickles
    let nickle = parseInt(pennies) / parseInt(NICKLE);
    //Display it
    let nickleDisplay = "<h3 id='label'>" + parseInt(nickle) + "</h3>";
    document.getElementById("nickle-display").innerHTML = nickleDisplay;
    //This is the remaining numbere of pennies
    pennies = parseInt(pennies) % parseInt(NICKLE);
    //Display it
    let pennyDisplay = "<h3 id='label'>" + parseInt(pennies) + "</h3>";
    document.getElementById("penny-display").innerHTML = pennyDisplay;
}

function clearForm() {
    let empty = "";
    document.getElementById("pennies").value = empty;
    document.getElementById("dollar-display").innerHTML = empty;
    document.getElementById("quarter-display").innerHTML = empty;
    document.getElementById("dime-display").innerHTML = empty;
    document.getElementById("nickle-display").innerHTML = empty;
    document.getElementById("penny-display").innerHTML = empty;

}

function calculateTotal() {
    //Declare constants for doing math
    const DOLLAR = 1.00;
    const QUARTER = .25;
    const DIME = .10;
    const NICKLE = .05;
    const PENNY = .01;

    let dollar = document.getElementById("dollars").value;
    let quarter = document.getElementById("quarters").value;
    let dime = document.getElementById("dimes").value;
    let nickle = document.getElementById("nickles").value;
    let penny = document.getElementById("pennies").value;

    let dollarTotal = dollar;
    let quarterTotal = quarter;
    let dimeTotal = dime;
    let nickleTotal = nickle;
    let pennyTotal = penny;

    //Calculate amounts
    let dollarAmount = parseFloat(dollar) * parseFloat(DOLLAR);
    let quarterAmount = parseFloat(quarter) * parseFloat(QUARTER);
    let dimeAmount = parseFloat(dime) * parseFloat(DIME);
    let nickleAmount = parseFloat(nickle) * parseFloat(NICKLE);
    let pennyAmount = parseFloat(penny) * parseFloat(PENNY);

    let total = parseFloat(dollarAmount) + parseFloat(quarterAmount) + parseFloat(dimeAmount) + parseFloat(nickleAmount)
        + parseFloat(pennyAmount);

    //Configure display values
    let dollarTotalDisplay = "<h3>" + dollarTotal + "</h3>";
    let quarterTotalDisplay = "<h3>" + quarterTotal + "</h3>";
    let dimeTotalDisplay = "<h3>" + dimeTotal + "</h3>";
    let nickleTotalDisplay = "<h3>" + nickleTotal + "</h3>";
    let pennyTotalDisplay = "<h3>" + pennyTotal + "</h3>";
    let totalTitle = "<h3>Total</h3>";

    let dollarAmountDisplay = "<h3>" + dollarAmount.toFixed(2) + "</h3>";
    let quarterAmountDisplay = "<h3>" + quarterAmount.toFixed(2) + "</h3>";
    let dimeAmountDisplay = "<h3>" + dimeAmount.toFixed(2) + "</h3>";
    let nickleAmountDisplay = "<h3>" + nickleAmount.toFixed(2) + "</h3>";
    let pennyAmountDisplay = "<h3>" + pennyAmount.toFixed(2) + "</h3>";
    let totalOutput = "<h3>$" + total.toFixed(2) + "</h3>";

    //Display values
    document.getElementById("dollar-total").innerHTML = dollarTotalDisplay;
    document.getElementById("dollar-amount").innerHTML = dollarAmountDisplay;
    document.getElementById("quarter-total").innerHTML = quarterTotalDisplay;
    document.getElementById("quarter-amount").innerHTML = quarterAmountDisplay;
    document.getElementById("dime-total").innerHTML = dollarTotalDisplay;
    document.getElementById("dime-amount").innerHTML = dimeAmountDisplay;
    document.getElementById("nickle-total").innerHTML = dimeTotalDisplay;
    document.getElementById("nickle-amount").innerHTML = nickleAmountDisplay;
    document.getElementById("penny-total").innerHTML = pennyTotalDisplay;
    document.getElementById("penny-amount").innerHTML = pennyAmountDisplay;
    document.getElementById("total-title").innerHTML = totalTitle;
    document.getElementById("total-amount").innerHTML = totalOutput;
}

function clearInput() {
    empty = "";

    //Clear Form
    document.getElementById("dollars").value = empty;
    document.getElementById("quarters").value = empty;
    document.getElementById("dimes").value = empty;
    document.getElementById("nickles").value = empty;
    document.getElementById("pennies").value = empty;

    //Clear Output
    document.getElementById("dollar-total").innerHTML = empty;
    document.getElementById("dollar-amount").innerHTML = empty;
    document.getElementById("quarter-total").innerHTML = empty;
    document.getElementById("quarter-amount").innerHTML = empty;
    document.getElementById("dime-total").innerHTML = empty;
    document.getElementById("dime-amount").innerHTML = empty;
    document.getElementById("nickle-total").innerHTML = empty;
    document.getElementById("nickle-amount").innerHTML = empty;
    document.getElementById("penny-total").innerHTML = empty;
    document.getElementById("penny-amount").innerHTML = empty;
    document.getElementById("total-title").innerHTML = empty;
    document.getElementById("total-amount").innerHTML = empty;
}