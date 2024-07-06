let a = document.getElementById("slide1").getElementsByTagName("img");
let b = document.getElementById("slide1").getElementsByTagName("i");

function timewait() {
  return new Promise((resolve) => {
    setTimeout(function () {
      a[0].style.visibility = "hidden";
      resolve(a[0].style.visibility);
    }, 1500);
  });
}

const f0 = () => {
  a[0].style.visibility = "visible";
  a[0].src = "imags/slide6.webp";
  b[5].classList.remove("chn");
  b[0].classList.add("chn");
};
const f1 = () => {
  a[0].style.visibility = "visible";
  a[0].src = "imags/slide2.webp";
  b[0].classList.remove("chn");
  b[1].classList.add("chn");
};
function f2() {
  a[0].style.visibility = "visible";
  a[0].src = "imags/slide3.webp";
  b[1].classList.remove("chn");
  b[2].classList.add("chn");
}
function f3() {
  a[0].style.visibility = "visible";
  a[0].src = "imags/slide5.webp";
  b[2].classList.remove("chn");
  b[3].classList.add("chn");
}
const f4 = () => {
  a[0].style.visibility = "visible";
  a[0].src = "imags/slide4.webp";
  b[3].classList.remove("chn");
  b[4].classList.add("chn");
};
const f5 = () => {
  a[0].style.visibility = "visible";
  a[0].src = "imags/slide7.webp";
  b[4].classList.remove("chn");
  b[5].classList.add("chn");
};
addEventListener("load", async function abc() {
  let val = await timewait();

  if (val === "hidden") {
    f1();
  }
  let val2 = await timewait();
  if (val2 === "hidden") {
    f2();
  }
  let val4 = await timewait();

  if (val4 === "hidden") {
    f3();
  }
  let val5 = await timewait();

  if (val5 === "hidden") {
    f4();
  }
  let val6 = await timewait();

  if (val6 === "hidden") {
    f5();
  }
  let val3 = await timewait();

  if (val3 === "hidden") {
    f0();
  }
  abc();
});
for (const itag of b) {
  itag.addEventListener("click", async () => {
    let count = itag.getAttribute("id");
    switch (count) {
      case "0":
        f0();
        break;
      case "1":
        f1();
        break;
      case "2":
        f2();
        break;
      case "3":
        f3();
        break;
      case "4":
        f4();
        break;
      case "5":
        f5();
        break;
      default:
        break;
    }
  });
}
