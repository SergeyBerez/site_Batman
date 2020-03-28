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
const titleEn = document.querySelector(".title-en");
const shortInfo = document.querySelector(".short-info");
const fullInfo = document.querySelector(".full-info");
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
  
  let top = Math.round(tag.getBoundingClientRect().top);
  

  if (window.pageYOffset > 1) {
    title.classList.add("fadeInLeftBig");
    titleEn.classList.add("fadeInLeftBig");
    info.classList.add("fadeInRightBig");

    if (title.classList.contains("fadeInLeftBig")) {
      title.classList.remove("fadeOutLeftBig");
      titleEn.classList.remove("fadeOutLeftBig");
      info.classList.remove("fadeOutRightBig");
    }
  } else if (
    window.pageYOffset < 1 &&
    title.classList.contains("fadeInLeftBig")
  ) {
    title.classList.add("fadeOutLeftBig");
    titleEn.classList.add("fadeOutLeftBig");
    title.classList.remove("fadeInLeftBig");
    titleEn.classList.remove("fadeInLeftBig");
    info.classList.add("fadeOutRightBig");
    info.classList.remove("fadeInRightBig");
  }
  // -------------------

  if (window.pageYOffset > 150) {
   console.log(1);
    shortInfo.classList.add("fadeInLeftBig");
    fullInfo.classList.add("fadeInRightBig");

    if (shortInfo.classList.contains("fadeInLeftBig")) {
      shortInfo.classList.remove("fadeOutLeftBig");
      fullInfo.classList.remove("fadeOutRightBig");
    }
  } else if (
    window.pageYOffset < 70 &&
    shortInfo.classList.contains("fadeInLeftBig")
  ) {
    shortInfo.classList.add("fadeOutLeftBig");
  fullInfo.classList.add("fadeOutRightBig");
    shortInfo.classList.remove("fadeInLeftBig");
    fullInfo.classList.remove("fadeInRightBig");
  }

  // if (window.pageYOffset > 100) {
  //   head.classList.add("position-fixed");
  // } else {
  //   head.classList.remove("position-fixed");
  // }
  // if (window.pageYOffset > 70) {
  //   infoAnimated.classList.add("fadeInRightBig");
  // } else {
  //   infoAnimated.classList.remove("fadeInRightBig");
  // }
});
