// window.onload = function() {
//   alert("Pick a healthy snack from the refrigerator!");
// };

$(window).ready(function(){
  alert("Pick a healthy snack from the refrigerator!");
});

// var oranges = document.getElementsByClassName("oranges");

$('oranges').click(function(){
  border: 5px, solid, orange;
  alert("You chose an orange!");
});

// oranges[0].onclick = function() {
//   oranges[0].style.border = "5px solid orange";
//   alert("You chose an orange!");
// };

// var apples = document.getElementsByClassName("apples");

// apples[0].onclick = function() {
//   apples[0].style.border = "5px solid red";
//   alert("You chose an apple!");
// };

$('apples').click(function(){
  border: 5px, solid, red;
  alert("You chose an apple!");
});
