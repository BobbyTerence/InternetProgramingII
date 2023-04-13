const weatherPics = [
    "<img class='img-fluid mx-auto d-block' src='images/clouds.png' alt='clouds'>",
    "<img class='img-fluid mx-auto d-block' src='images/rain.png' alt='rain'>",
    "<img class='img-fluid mx-auto d-block' src='images/snow.png' alt='snow'>",
    "<img class='img-fluid mx-auto d-block' src='images/storms.png' alt='storms'>",
    "<img class='img-fluid mx-auto d-block' src='images/sunny.png' alt='sunny'>",
];

function generateWeather() {
    let weatherForecast = randNum();

    let weatherDescrip = "";
    let weatherImg = weatherPics[weatherForecast];

    switch (weatherForecast) {
        case 0:
            weatherDescrip = "<p>It will be cloudy</p>";
            break;
        case 1:
            weatherDescrip = "<p>It will be rainy</p>";
            break;
        case 2:
            weatherDescrip = "<p>It will be snowy</p>";
            break;
        case 3:
            weatherDescrip = "<p>It will be stormy</p>";
            break;
        case 4:
            weatherDescrip = "<p>It will be sunny</p>";
            break;
        default:
            break;
    }

    document.getElementById("weather-image").innerHTML = weatherImg;
    document.getElementById("weather-description").innerHTML = weatherDescrip
}

function randNum() {
    let randNum = Math.floor(Math.random() * (5 - 0));
    return randNum;
}