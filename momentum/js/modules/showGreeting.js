import getTimeOfDay from "./getTimeOfDay.js";
import hash from "./translation.js";

const translate = {
  night: {
    ru: "Доброй ночи, ",
    en: "Good night, ",
  },
  morning: {
    ru: "Доброе утро, ",
    en: "Good morning, ",
  },
  afternoon: {
    ru: "Добрый день, ",
    en: "Good afternoon, ",
  },
  evening: {
    ru: "Добрый вечер, ",
    en: "Good evening, ",
  },
};



function showGreeting() {
  const selectLanguage = document.querySelector(".language");
  let newHash = selectLanguage.value;

  const greetingFragment = document.querySelector(".greeting");
  const date = new Date();
  const hours = date.getHours();


  greetingFragment.textContent = translate[`${getTimeOfDay(hours)}`][newHash];
}

export default showGreeting;
