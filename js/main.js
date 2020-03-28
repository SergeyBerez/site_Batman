// $(function() {
//   let tabs = $(".tabs-item");

//   $(tabs).on("click", function(e) {
//     e.preventDefault();
//     let activeContent = $(this).attr("href");

//     $(".visible").toggleClass("visible");
//     $(activeContent).toggleClass("visible");
//     $(".tabs-item-active").toggleClass("tabs-item-active");
//     $(this).toggleClass("tabs-item-active");
//     console.log($(tabs));
//   });
// });

const tabs = document.querySelectorAll(".tabs-item");
const title = document.querySelector(".title");
const head = document.querySelector(".header");
const tabsContent = document.querySelectorAll(".tabs-content");
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function(e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    const tabs = document.getElementById(id);
    tabsContent.forEach(element => {
      if (element.classList.contains("visible")) {
        element.classList.remove("visible");
      }
    });
    tabs.classList.add("visible");
  });
}

document.addEventListener("scroll", function(e) {
  if (window.pageYOffset > 5) {
    title.classList.add("fadeInLeftBig");
  } else {
    title.classList.remove("fadeInLeftBig");
  }

  if (window.pageYOffset > 50) {
    head.classList.add("position-fixed");
  } else {
    head.classList.remove("position-fixed");
  }
});
