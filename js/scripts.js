$(function() {
  $(".clickable1").click(function() {
    $("body").removeClass();
    $("#initially-showing1").toggle();
    $("#initially-hidden1").toggle();
    // $("#initially-showing2").toggle();
    // $("#initially-hidden2").toggle();

  });
});
$(function() {
  $(".clickable2").click(function() {
    $("body").removeClass();
    $("#initially-showing2").toggle();
    $("#initially-hidden2").toggle();
  });
});
