import getRandomNum from "./getRandomNum.js";

function setUnsplashBackground(params) {
  const prevArrow = document.querySelector(".slide-prev");
  const nextArrow = document.querySelector(".slide-next");

let backgroundNum = getRandomNum(0,4)
// async function getBackground() {
  const url =
    "https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=Gh1Wu6YNiIamfFPmotquNKaBXY6uHb5ekOu093sLscg&count=4";
  const res = await fetch(url);
  const data = await res.json();
  console.log(data[randomNum].urls.regular);
}
getBackground();

}
