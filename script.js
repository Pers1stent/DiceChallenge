var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var diceImage1 = "dice" + randomNumber1 + ".png";
var randomImagesSource1 = "images/" + diceImage1;
var nice = document.querySelectorAll("img")[0];
nice.setAttribute("src", randomImagesSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var diceImage2 = "dice" + randomNumber2 + ".png";
var randomImagesSource2 = "images/" + diceImage2;
var good = document.querySelectorAll("img")[1];
good.setAttribute("src", randomImagesSource2);


    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } else if(randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }

