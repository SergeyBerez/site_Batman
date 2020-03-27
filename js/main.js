$(function() {
  let tabs = $(".tabs-item");

  $(tabs).on("click", function(e) {
    e.preventDefault();
    let activeContent = $(this).attr("href");
    console.log($(activeContent));
    $(".visible").toggleClass("visible");
    $(activeContent).toggleClass("visible");
    $(".tabs-item-active").toggleClass("tabs-item-active");
    $(this).toggleClass("tabs-item-active");
  });
});
