import getRandomNum from "./getRandomNum.js";

function setUnsplashBackground(params) {
  const prevArrow = document.querySelector(".slide-prev");
  const nextArrow = document.querySelector(".slide-next");
  const tag = document.querySelector(".background-tag");
  const selectedBackground = document.querySelector(".background-select");

  let backgroundNum = getRandomNum(0, 3);

  async function getBackground() {
    const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${tag.value}&client_id=Gh1Wu6YNiIamfFPmotquNKaBXY6uHb5ekOu093sLscg&count=4`;
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
    prevArrow.addEventListener("click", getSlidePrev);
    nextArrow.addEventListener("click", getSlideNext);

    console.log(backgroundNum);

    function getSlidePrev() {
      if (selectedBackground.value != "unsplash") return;
      document.body.style.backgroundImage = 'none'
      backgroundNum--;
      console.log(backgroundNum);

      backgroundNum < 0
        ? ((backgroundNum = 3), setBackground())
        : setBackground();
    }

    function getSlideNext() {
      if (selectedBackground.value != "unsplash") return;
      backgroundNum++;
      console.log(backgroundNum);
      backgroundNum > 3
        ? ((backgroundNum = 0), setBackground())
        : setBackground();
    }
  }
  getBackground();
}

export default setUnsplashBackground;
