let a = document.getElementsByClassName("slide2");
let b = document.getElementsByClassName("slide3");

setInterval(function () {
  a[0].style.visibility =
    a[0].style.visibility === "hidden" ? "visible" : "hidden";
}, 1500);
setInterval(function () {
  b[0].style.visibility =
    b[0].style.visibility === "hidden" ? "visible" : "hidden";
}, 3500);
