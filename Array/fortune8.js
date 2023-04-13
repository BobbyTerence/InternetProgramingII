//Create the array's for eight ball and fortune cookie answers
const eightBallAns = [
    "<p>My Sources say... nope</p>",
    "<p>It is certain</p>", "<p>Prolly not chief</p>", 
    "<p>Yessir!!!</p>", "<p>Does not look promising</p>", 
    "<p>For Sure brother</p>", "<p>No</p>", "<p>Yes</p>", 
    "<p>I'm 100% positive it is a no</p>", "<p>Almost certainly yes</p>"
];
const fortuneCookieAns = [
    "<p>You will soon embark on a great adventure.</p>",
    "<p>A wonderful surprise is in store for you.</p>",
    "<p>You will find great success in your future endeavors.</p>",
    "<p>Good fortune will come your way.</p>",
    "<p>Your hard work will pay off in the end.</p>",
    "<p>A new opportunity will arise that will lead to prosperity.</p>",
    "<p>You will make a new friend who will become an important part of your life.</p>",
    "<p>You will soon receive good news from a loved one.</p>",
    "<p>Your creativity will lead to great things.</p>",
    "<p>You will be blessed with good health and happiness.</p>"
];

function generateRand(ele) {
    let randNum = Math.floor(Math.random() * (10 - 0));
    let outputStr = "";

    if(ele == "eight-ball") {
        outputStr = eightBall(randNum);
    }
    else {
        outputStr = fortuneCookie(randNum);
    }

    document.getElementById("display-space").innerHTML = outputStr;
}

function eightBall(randNum) {
    return eightBallAns[randNum];
}

function fortuneCookie(randNum) {
    return fortuneCookieAns[randNum];
}

