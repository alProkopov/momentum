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
  const currentDate = date.toLocaleDateString("en-En", options);

  dateFragment.textContent = currentDate;

  setTimeout(showDate, 1000);
}

function showGreeting() {
  const greetingFragment = document.querySelector(".greeting");
  const date = new Date();
  const hours = date.getHours();
  console.log(hours);

  function getTimeOfDay(hours) {
    if (hours < 6) return "night";
    if (hours < 12) return "morning";
    if (hours < 18) return "day";
    return "evening";
  }
  greetingFragment.textContent = `Good ${getTimeOfDay(hours)},`;
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



window.addEventListener('beforeunload', setLocalStorage)
window.addEventListener('load', getLocalStorage)

showTime();
