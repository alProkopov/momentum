import getRandomNum from "./getRandomNum.js";

function setUnsplashBackground(params) {
  const prevArrow = document.querySelector(".slide-prev");
  const nextArrow = document.querySelector(".slide-next");
  const tag = document.querySelector(".background-tag");
  const selectedBackground = document.querySelector(".background-select");

  let backgroundNum = getRandomNum(0, 4);

  async function getBackground() {
    const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${tag.value}&client_id=Gh1Wu6YNiIamfFPmotquNKaBXY6uHb5ekOu093sLscg&count=5`;
    const res = await fetch(url);
    const data = await res.json();

    function setBackground() {
      const img = new Image();
      img.src = data[backgroundNum].urls.regular;
      img.onload = () => {
        document.body.style.backgroundImage = `url('${img.src}')`;
      };
    }
    setBackground();

    function getNewSlide() {
      backgroundNum = getRandomNum(0, 4);
      setBackground();
    }

    prevArrow.addEventListener("click", getNewSlide);
    nextArrow.addEventListener("click", getNewSlide);
  }
  getBackground();
}

export default setUnsplashBackground;
