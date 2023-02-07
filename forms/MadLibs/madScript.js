function generateMadLib() {
    var output = "";

    let date = document.getElementById("date").value;
    let name = document.getElementById("name").value;
    let adj = document.getElementById("adj").value;
    let noun = document.getElementById("noun").value;
    let sig = document.getElementById("sig").value;

    output = "<p>Date: " + date + "</p>"
    + "<p>Please Excuse: " + name + "</p>"
    + "<p>who is far too " + adj + "</p>"
    + "<p>to attend " + noun + "class.</p>"
    + "<p>Signed: " + sig + "</p>";

    document.getElementById("displayArea").innerHTML = output;
}