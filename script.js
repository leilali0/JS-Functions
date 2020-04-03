// Calculator function
// take a number and divided it by 2
var calculate = document.getElementById("half-button");
calculate.addEventListener("click", halfNum);

function halfNum() {
  var num = document.getElementById("half-input").value;
  if (num) {
    var result = num / 2;
    alert("Half of " + num + " is " + result);
  } else {
    alert("Please enter a number"); //when value isn't a numebr
  }
}

var fortune = document.getElementById("fortune-button");
var output = document.getElementById("fortune-output");

//choosding a random fortune from an array of fortunes
function getFortune() {
  var name = document.getElementById("fortune-input").value;
  if (name) {
    var fortunes = ["a good time to finish up old tasks.",
                    "beauty in its various forms appeals to you.",
                    "curiosity kills boredom. Nothing can kill curiosity",
                    "don’t just think, act!",
                    "every flower blooms in its own sweet time.",
                    "from now on your kindness will lead you to success."];
    var index = Math.floor(Math.random() * fortunes.length);
    var result = name + ", " + fortunes[index]; // adding the user's name
    output.innerHTML = result; // changinf the html to display fortune
  } else {
    alert("Please enter your name"); // when no name is entered
  }
}

// applies three new CSS styles to the fortune text in a random manner

function restyle() {
    //choosing a random color
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var color = "rgb(" + r + "," + g + "," + b + ")";

    //geting font size from 15 to 30
    var size = Math.floor(Math.random() * 15) + 15;

    //get random text shadow
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    //code from: https://css-tricks.com/snippets/javascript/random-hex-color/
    var shadow =  "2px 1px 4px" + randomColor;

    //changing properties
    output.style.color = color;
    output.style.fontSize = size + "px";
    output.style.textShadow = shadow;
}

fortune.addEventListener("click", getFortune);
fortune.addEventListener("click", restyle);
