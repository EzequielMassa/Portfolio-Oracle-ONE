$(document).ready(() => {
  $("#menu-mobile").click(() => {
    $("#menu").toggleClass("hide");
  });

  $(".menu-items a").click((e) => {
    $("#menu").toggleClass("hide");
    $(".menu-items a").removeClass("active");
    $(e.target).toggleClass("active");
  });
});
