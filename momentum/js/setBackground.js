import setBackground from "./modules/setGitHubBackground.js";
import setUnsplashBackground from "./modules/setUnsplashBackground.js";
import setFlickrBackground from "./modules/setFlickrBackground.js";

const selectedBackground = document.querySelector(".background-select");
const tag = document.querySelector(".background-tag");
const tagInput = document.querySelector(".background-tag");

function changeBackground() {
  // location.reload()

  switch (selectedBackground.value) {
    case "gitHub":
      document.body.style.backgroundImage = "none";
      tagInput.disabled = true;
      setBackground();
      break;
    case "unsplash":
      document.body.style.backgroundImage = "none";
      tagInput.disabled = false;

      setUnsplashBackground();
      break;
    case "flickr":
      tagInput.disabled = false;

      document.body.style.backgroundImage = "none";

      setFlickrBackground();
      break;
    default:
      break;
  }

  setLocalStorage();
}

function setLocalStorage(params) {
  const selectedBackground = document.querySelector(".background-select");
  const tag = document.querySelector(".background-tag");
  localStorage.setItem("selectedBackground", selectedBackground.value);
  localStorage.setItem("selectedTag", tag.value);
}

function getLocalStorage(params) {
  const selectedBackground = document.querySelector(".background-select");
  if (localStorage.getItem("selectedBackground")) {
    selectedBackground.value = localStorage.getItem("selectedBackground");
  }
  if (localStorage.getItem("selectedTag")) {
    tag.value = localStorage.getItem("selectedTag");
  }
}

tag.addEventListener("change", changeBackground);
tag.addEventListener("change", (e) => location.reload());
selectedBackground.addEventListener("change", (e) => location.reload());

window.addEventListener("beforeunload", setLocalStorage);
window.addEventListener("load", getLocalStorage);
window.addEventListener("load", changeBackground);
selectedBackground.addEventListener("change", changeBackground);
