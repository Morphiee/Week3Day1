
$(document).ready(function() {
  $("#btn1").on('click', function() {
    var answers = ["Yup", "Fuhgeddaboudit", "Maybe", "Ask: What would Ruby do?", "Hell no", "Only if your mom would approve", "Only if there's a blue moon or eclipse"]
    var randomNum;
    var question = document.getElementById("inputField").value;
    randomNum = Math.floor(Math.random() * 7);
    var complete = answers[randomNum];
    alert($("#inputField").val() + "\n" + complete);
    $("#outputQuestion").text($("#inputField").val());
    $("#inputField").val(" ");
  });
});

function test() {
  alert("Test1" + "\nTest2");
      $("#outputText").html(complete);
}
