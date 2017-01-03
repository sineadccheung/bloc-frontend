$(document).ready(function() {
  alert("Pick a healthy snack from the refrigerator!");
});

var $oranges = $('.oranges');

$oranges.click(function() {
  $(this).css('border', '5px solid orange');
  alert("You chose an orange!");
});

var $apples = $('.apples');

$apples.click(function(){
  $(this).css('border', '5px solid red');
  alert("You chose an apple!");
});
