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

const head = document.querySelector(".header");
const tabsContent = document.querySelectorAll(".tabs-content");
const title = document.querySelector(".title");
const info = document.querySelector(".info");
const tag = document.querySelector(".tag");
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
  console.log(1);
  let top = Math.round(tag.getBoundingClientRect().top);
  console.log(top);

  if (window.pageYOffset > 1) {
    title.classList.add("fadeInLeftBig");
    info.classList.add("fadeInRightBig");

    if (document.querySelector(".fadeInLeftBig")) {
      title.classList.remove("fadeOutLeftBig");
      info.classList.remove("fadeOutRightBig");
    }
  } else if (
    window.pageYOffset < 1 &&
    document.querySelector(".fadeInLeftBig")
  ) {
     title.classList.add("fadeOutLeftBig");
    title.classList.remove("fadeInLeftBig");
    info.classList.add("fadeOutRightBig");
    info.classList.remove("fadeInRightBig");
  }

  if (window.pageYOffset > 100) {
    head.classList.add("position-fixed");
  } else {
    head.classList.remove("position-fixed");
  }
  // if (window.pageYOffset > 70) {
  //   infoAnimated.classList.add("fadeInRightBig");
  // } else {
  //   infoAnimated.classList.remove("fadeInRightBig");
  // }
});
