$(document).ready(function () {
  //design buttons
  const design = $("#design-btn");
  const dev = $("#dev");
  const pm = $("#pm");
  //getting the paragraphs
  design.click(function () {
    $("#design").addClass("p-toggle-show");
    $(".design-img").hide();
    // $("#design-text").hide();
  });
  dev.click(function () {
    $("#dev-text").addClass("p-toggle-show");
    $(".dev-img").hide();
    // $("#dev-text").hide();
  });
  pm.click(function () {
    $("#pm-text").addClass("p-toggle-show");
    $(".pm-img").hide();
    // $("#dev-text").hide();
  });
  //show the images when clicked
  $("#design").click(function () {
    $(".design-img").show();
    $("#design").hide();
  });
  //   alert("hello world");
});
