$(document).ready(() => {
  $(".mobile-btn-open").click(() => {
    $(".main-nav").addClass("abrir-menu");
  });
  $(".mobile-btn-close").click(() => {
    $(".main-nav").removeClass("abrir-menu");
  });
  $(".main-nav-link").click((e) => {
    $(".main-nav-link").removeClass("active");
    $(e.target).toggleClass("active");
  });
});
