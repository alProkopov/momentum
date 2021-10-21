import getTimeOfDay from "./modules/getTimeOfDay.js";
import getRandomNum from "./modules/getRandomNum.js";

const prevArrow = document.querySelector(".slide-prev");
const nextArrow = document.querySelector(".slide-next");

let backgroundNum = getRandomNum(1, 20).toString().padStart(2, "0");

function setBackground(params) {
  const date = new Date();
  const hours = date.getHours();
  const timeOfDay = getTimeOfDay(hours);
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${backgroundNum}.jpg`;
  img.onload=()=>{
    document.body.style.backgroundImage = `url('${img.src}')`;
  }
}

function getSlidePrev() {
  backgroundNum--;
  backgroundNum = backgroundNum.toString().padStart(2, "0");
  backgroundNum < 1 ? (backgroundNum = 20) : setBackground();
}

function getSlideNext() {
  backgroundNum++;
  backgroundNum = backgroundNum.toString().padStart(2, "0");
  backgroundNum > 20 ? (backgroundNum = 1) : setBackground();
}

prevArrow.addEventListener("click", getSlidePrev);
nextArrow.addEventListener("click", getSlideNext);

setBackground();
