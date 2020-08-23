const next = document.querySelectorAll(".next");
const prev = document.querySelectorAll(".prev");
const article = document.querySelector("article");

let widthOfArticle = article.clientWidth;
next.forEach((a) => {
  a.addEventListener("click", moveToNextArticle);
  function moveToNextArticle() {
    document.querySelectorAll("article").forEach((a) => {
      a.style.transform = `translateX(-${widthOfArticle}px)`;
    });
  }
});

prev.forEach((a) => {
  a.addEventListener("click", moveToPrevArticle);
  function moveToPrevArticle() {
    document.querySelectorAll("article").forEach((a) => {
      a.style.transform = "translateX(0)";
    });
  }
});

//put the slide in the right position when we risize
window.addEventListener("resize", () => {
  if (article.clientWidth <= 700) {
    if (
      document.querySelector("article").style.transform == "translateX(-1315px)"
    ) {
      document.querySelectorAll("article").forEach((a) => {
        a.style.transform = `translateX(-300px)`;
      });
    }
  } else if (article.clientWidth > 700) {
    if (
      document.querySelector("article").style.transform == "translateX(-300px)"
    ) {
      document.querySelectorAll("article").forEach((a) => {
        a.style.transform = `translateX(-1315px)`;
      });
      console.log("done");
    }
  }
});
