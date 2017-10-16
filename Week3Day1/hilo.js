function isNumber(userInput) {
  var userNum = parseInt(userInput, 10);
  if (userNum.toString == "NaN") {
    var userInput = prompt("Guess what our random number is.");
  } else {
    return (userNum);
  }
}

var randNum = Math.floor(Math.random() * 100);
console.log(randNum);
var userTries = 0;

function hiLo () {

  var userInput = document.getElementById("inputField").value;
  var userNum = isNumber(userInput);

  if (userNum > randNum){
    document.getElementById("outputText").innerHTML = userInput + " is too high! Guess again!";
    document.getElementById("inputField").value = " ";
  } else if (userNum < randNum) {
    document.getElementById("outputText").innerHTML = userInput + " is too low! Guess again!";
    document.getElementById("inputField").value = " ";
  } else if (userNum === randNum) {
    document.getElementById("outputText").innerHTML = "You Rock!! " + userNum + " is our number!!";
  }
  userTries += 1;
  if (userTries >= 7) {
    document.getElementById("outputText").innerHTML = ("Bummer! too many tries. 7 was your limit!")
    return 0;
  }
}


$(document).ready(function() {
  $("#btn1").on('click', function() {
    var userInput = document.getElementById("inputField").value;
    var userNum = isNumber(userInput);

    if (userNum > randNum){
      $("#outputText").text(userInput + " is too high! Guess again!");
      $("#inputField").val(" ");
    } else if (userNum < randNum) {
      $("#outputText").text(userInput + " is too low! Guess again!");
      $("#inputField").val(" ");
    } else if (userNum === randNum) {
      alert($("#inputField").val() + " Was the right number congrats!");
      location.reload();
    }
    userTries += 1;
    if (userTries <= 7) {
      $("#tries").text(userTries + "/7 Tries!");
      return 0;
    } else {
      alert("You 0 tries left!" + "\nPlease reset the game!");
    }
  });
});


function reset() {
  location.reload();
}
