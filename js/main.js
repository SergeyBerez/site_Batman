$(function() {
  let tabs = $(".tabs-item");

  $(tabs).on("click", function(e) {
    e.preventDefault();
    let activeContent = $(this).attr("href");
    // console.log($(".visible"));

    $(".visible").toggleClass("visible");
    $(activeContent).toggleClass("visible");
    $(".tabs-item-active").toggleClass("tabs-item-active");
    $(this).toggleClass("tabs-item-active");
    console.log($(tabs));
  });
});
let title = document.querySelector(".title");
let head = document.querySelector(".header");
document.addEventListener("scroll", function(e) {
  if (window.pageYOffset > 50) {
    head.classList.add("position-fixed");
    title.classList.add("fadeInLeftBig");
 } else {
    head.classList.remove("position-fixed");
  }
});
