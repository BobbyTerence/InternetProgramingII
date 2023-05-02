function celciusLoop() {
    outputTable = "<thead class='thead-dark'>" +
        "<tr>" +
            "<th scope='col'>Celcius</th>" +
            "<th scope='col'>Fahrenheight</th>" +
        "</tr>" +
    "</thead>";

    outputTable += "<tbody>";

    let celcius = 0;
    let fahrenheight = 0;

    for(celcius; celcius <= 100; celcius++) {
        outputTable += "<tr>" +
            "<th>" + celcius + "</th>";
        
        fahrenheight = (celcius * (9 / 5)) + 32;

        outputTable += "<th>" + Number.parseFloat(fahrenheight).toFixed(1) + "</th>" +
            "</tr>";
    }

    outputTable += "</tbody>"

    document.getElementById("temp-table").innerHTML = outputTable;
}

function fahrenheightLoop() {
    outputTable = "<thead class='thead-dark'>" +
        "<tr>" +
            "<th scope='col'>Fahrenheight</th>" +
            "<th scope='col'>Celcius</th>" +
        "</tr>" +
    "</thead>";

    outputTable += "<tbody>";

    let celcius = 0;
    let fahrenheight = 5;

    for(fahrenheight; fahrenheight <= 225; fahrenheight += 5) {
        outputTable += "<tr>" +
            "<th>" + fahrenheight + "</th>";
        
        celcius = (fahrenheight - 32) * (5 / 9);

        outputTable += "<th>" + Number.parseFloat(celcius).toFixed(1) + "</th>" +
            "</tr>";
    }

    outputTable += "</tbody>"

    document.getElementById("temp-table").innerHTML = outputTable;
}