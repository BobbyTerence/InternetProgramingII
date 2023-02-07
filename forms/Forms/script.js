function processForm() {
    var output = "";
    let name = document.getElementById("name").value;
    let password = document.getElementById("pwd").value;
    let comment = document.getElementById("comments").value;

    output = "<p>Entered Name: " + name + "</p>" + 
    "<p>Entered Password: " + password + "</p>"
    "<p>Comments Entered: " + comment + "</p>";

    document.getElementById("displayArea").innerHTML = output;
}