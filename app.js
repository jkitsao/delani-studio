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
  //on hover
  $("#pr-1").hover(function () {
    $("#p-1").toggle();
  });
  $("#pr-2").hover(function () {
    $("#p-2").toggle();
  });
  $("#pr-3").hover(function () {
    $("#p-3").toggle();
  });
  $("#pr-4").hover(function () {
    $("#p-4").toggle();
  });
  $("#pr-5").hover(function () {
    $("#p-5").toggle();
  });
  $("#pr-6").hover(function () {
    $("#p-6").toggle();
  });
  $("#pr-7").hover(function () {
    $("#p-7").toggle();
  });
  $("#pr-8").hover(function () {
    $("#p-8").toggle();
  });
  $("#exampleModal").on("shown.bs.modal", function () {
    $(".name_field").trigger("focus");
  });
  if (!$(".name_field").val()) {
    // $("#sub-btn").addClass("disabled");
  }
  //form submission
  $("#form-1").submit((e) => {
    e.preventDefault();
  });
});
