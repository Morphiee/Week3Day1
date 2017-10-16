var userid = "Test123";
var passid = "Test1234!";
var userTries = 0;

$(document).ready(function() {
  $("#btn1").on('click', function() {

    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    console.log(user, pass)
    if (user === pass) {
      $("#outputText").text("Username and pass cannot be the same");
      $("#user").val("");
      $("#pass").val("");
    } else if (user.length < 6 && pass.length < 6 ) {
      $("#outputText").text("Username and password must be 6 characters long.");
      $("#user").val("");
      $("#pass").val("");
    } else if (user.includes("!", "#", "$")) {
      $("#outputText").text("Username cannot contain these characters! '!#$'");
      $("#user").val("");
      $("#pass").val("");
    } else if (!pass.includes("!", "#", "$", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0)) {
      $("#outputText").text("Password must contain these characters! '!#$' and one number!");
      $("#user").val("");
      $("#pass").val("");
    } else if (pass === "password") {
      $("#outputText").text("Password cannot be password!");
      $("#user").val("");
      $("#pass").val("");
    } else if (userid === user && passid === pass) {
       alert("Congratulations! You are logged in!");

    } else {
      alert("Sorry! You have inputed an invalid User/Pass.")
    }
    userTries += 1;
    if (userTries >= 5) {
      $("#outputText").text("You have exceeded all your login attempts! (5)");
      $("#btn1").off();
      return 0;
    };
  });
});
