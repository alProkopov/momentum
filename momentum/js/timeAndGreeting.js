import getTimeOfDay from "./modules/getTimeOfDay.js";
import showGreeting from "./modules/showGreeting.js";
import hash from "./modules/translation.js";

function showTime() {
  const timeFragment = document.querySelector(".time");
  const date = new Date();
  const currentTime = date.toLocaleTimeString();

  timeFragment.textContent = currentTime;

  showGreeting();
  showDate();
  setTimeout(showTime, 1000);
}

function showDate(params) {
  const dateFragment = document.querySelector(".date");
  const date = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" }; //timeZone:'UTC'
  const currentDate = date.toLocaleDateString(`${hash}`, options);
  let result = currentDate[0].toUpperCase() + currentDate.slice(1)

  dateFragment.textContent = result;


  setTimeout(showDate, 1000);
}



function setLocalStorage(params) {
  const name = document.querySelector(".name");
  localStorage.setItem("name", name.value);
}

function getLocalStorage(params) {
  const name = document.querySelector(".name");
  if (localStorage.getItem("name")) {
    name.value = localStorage.getItem("name");
  }
}

window.addEventListener("beforeunload", setLocalStorage);
window.addEventListener("load", getLocalStorage);

showTime();
