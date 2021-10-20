import getTimeOfDay from "./getTimeOfDay.js";

function showGreeting() {
  const greetingFragment = document.querySelector(".greeting");
  const date = new Date();
  const hours = date.getHours();
  greetingFragment.textContent = `Good ${getTimeOfDay(hours)},`;
}

export default showGreeting;
