function changePic(btnValue) {
    let outputStr = "";

    switch(btnValue) {
        case "default":
            outputStr = "<img class='img-fluid mx-auto d-block' src='default-croco.jpg' height='500' alt='Normal Croco'>";
            break;
        case "florida":
            outputStr = "<img class='img-fluid mx-auto d-block' src='floridian-croco.jpg' height='500' alt='Floridian Croco'>";
            break;
        case "joe-dirt":
            outputStr = "<img class='img-fluid mx-auto d-block' src='joe-dirt-croco.jpg' height='500' alt='Joe Dirt with a Croco'>";
            break;
        case "glocko":
            outputStr = "<img class='img-fluid mx-auto d-block' src='croco-wit-da-glocko.jpg' height='500' alt='Croco with a Glocko'>"
            break;
        default:
            outputStr = "<img class='img-fluid mx-auto d-block' src='default-croco.jpg' height='500' alt='Normal Croco'>";
            break;
    }

    document.getElementById("img-space").innerHTML = outputStr;
}