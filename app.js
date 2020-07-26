$(document).ready(function () {
  const design = $("#design-btn");
  const dev = $("#dev");
  const pm = $("#pm");

  $(".design-img").click(function () {
    $(".design-img").hide();
    $("#design").show();
  });

  $("#design").click(function () {
    $(".design-img").show();
    $("#design").hide();
  });
  //toggle development
  $(".dev-img").click(function () {
    $(".dev-img").hide();
    $("#dev-text").show();
  });

  $("#dev-text").click(function () {
    $(".dev-img").show();
    $("#dev-text").hide();
  });
  //toggle project management
  $(".pm-img").click(function () {
    $(".pm-img").hide();
    $("#pm-text").show();
  });

  $("#pm-text").click(function () {
    $(".pm-img").show();
    $("#pm-text").hide();
  });
});
