//For the array, I used chatGPT to generate 150 unique words in order to not come up with 300 unique words on my own
const wordBank = [
  "Dunk", "Tusk", "Rift", "Chug", "Jolt", "Foul", "Haze", "Gush", "Vast", "Wasp",
  "Glee", "Lure", "Numb", "Plum", "Sewn", "Sway", "Sunk", "Jazz", "Harp", "Dove",
  "Fang", "Gnat", "Jade", "Dune", "Cure", "Lush", "Melt", "Jinx", "Kelp", "Puff",
  "Free", "Pint", "Poem", "Ooze", "Muse", "Rave", "Yawn", "Wavy", "Zing", "Vial",
  "Plow", "Calm", "Hive", "Fawn", "Knit", "Plow", "Twig", "Mink", "Nook", "Wink",
  "Bevy", "Chum", "Fend", "Lick", "Sage", "Sift", "Sore", "Swab", "Gory", "Veto",
  "Hush", "Urns", "Mush", "Bask", "Pile", "Gasp", "Kink", "Jive", "Hurl", "Ploy",
  "Hiss", "Kiss", "Lisp", "Rush", "Flee", "Peek", "Peep", "Poof", "Muck", "Gush",
  "From", "Duff", "Gaff", "Guff", "Huff", "Miff", "Muff", "Cuff", "Ruff", "Tuff",
  "Aqua", "Bolt", "Bump", "Chop", "Clap", "Cusp", "Damp", "Fork", "Gulf", "Hawk",
  "Miss", "Kite", "Lift", "Lump", "Milk", "Myth", "Nest", "Palm", "Puck", "Pulp",
  "Quit", "Roam", "Soul", "Stun", "Surf", "Tint", "Trap", "Turf", "Vamp", "Wink",
  "Ache", "Bald", "Dart", "Echo", "Fond", "Glow", "Halt", "Hunk", "Icy", "Jazz",
  "Knee", "Lava", "Leaf", "Hick", "Loaf", "Mist", "Mutt", "Ouch", "Pony", "Roar",
  "Slap", "Slug", "Snug", "Stem", "Tilt", "Twin", "Wilt", "Wisp", "Wren", "Zest"
];

//Array to be used to keeep track of which indexes have beeen shown, only requiring a number comparison and not a string comparison
const seenIndex = new Array(1);

//Global constants to kepe track of life
const TOTALLIVES = 3;
var livesLost = 0

//Score Counter
var score = 0;

//Record Counter
var record = 0;

//Global variable to store the index number for the array
var indexNum = 0;

//Create header elements to keeep track of high score and current score
var scoreHead = document.createElement('h2');
var recordHead = document.createElement('h2');
var livesMarker = document.createElement('h3');


function generateGame() {
  //Create a variable to lessen typing document.getElementById()
  const divEdit = document.getElementById('btn-pad');
  const scoreEdit = document.getElementById('score-display');
  const livesEdit = document.getElementById('lives-left');

  livesMarker.innerText = "Lives Left: " + TOTALLIVES;
  livesEdit.appendChild(livesMarker);

  //Create button elements
  const seenBtn = document.createElement('button');
  const diffBtn = document.createElement('button');

  //Content for Score
  scoreHead.innerText = "Score: ";
  recordHead.innerText = "Highest Score: " + record;

  //Content for seenBtn element
  seenBtn.innerText = "Seen";
  seenBtn.id = "seen";
  seenBtn.classList.add("btn");
  seenBtn.classList.add("btn-secondary");
  seenBtn.addEventListener("click", compare);
  seenBtn.addEventListener('click', randWord);

  //Content for diffBtn
  diffBtn.innerText = "Different";
  diffBtn.id = "diff";
  diffBtn.classList.add("btn");
  diffBtn.classList.add("btn-secondary");
  diffBtn.addEventListener('click', compare);
  diffBtn.addEventListener('click', randWord);

  //Append Score and Record elements to necessary Div
  scoreEdit.innerHTML = "";
  scoreEdit.appendChild(scoreHead);
  scoreEdit.appendChild(recordHead);

  //Add those Game to the btn-pad div
  divEdit.innerHTML = "";
  divEdit.appendChild(seenBtn);
  divEdit.appendChild(diffBtn);
}

function onLoad() {
  const playFour = document.createElement('button');

  playFour.innerText = "Play Game";
  playFour.classList.add("btn");
  playFour.classList.add("btn-secondary");
  playFour.addEventListener("click", generateGame);
  playFour.addEventListener("click", randWord);

  document.getElementById('btn-pad').appendChild(playFour);
}

function randWord() {
  indexNum = Math.floor(Math.random() * 150);

  word = document.createElement('p');
  word.innerText = wordBank[indexNum];

  document.getElementById('word-bank').innerHTML = "";
  document.getElementById('word-bank').appendChild(word);
}
  
function compare() {
  if (this.id == 'diff') {
    for(var i = 0; i < seenIndex.length; i++) {
      if(indexNum == seenIndex[i]) {
        livesLost += 1;
      }
      
      else {
        score += 1;
        seenIndex.push(indexNum);
      }
    }
    gameCondition();
  }

  else if (this.id == 'seen') {
    var i = 0;
    do {
      if(indexNum == seenIndex[i]) {
        score += 1;
        break;
      }
      i++;
    } while(i < seenIndex.length);

    if(i == seenIndex.length) {
      livesLost += 1;
    }
    gameCondition();
  }
}

function gameCondition() {
  const livesEdit = document.getElementById('lives-left');

  var lifeMarker = TOTALLIVES - livesLost;

  if(livesLost <= 3) {
    livesMarker.innerHTML = "Lives Left: " + lifeMarker;
    scoreHead.innerText = "Score: " + score;
    if(score > record) {
      record = score
      recordHead.innerText = "High Score: " + record;
    }
  }
  else if (livesLost == 3) {

  }
}
  