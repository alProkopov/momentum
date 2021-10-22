import getRandomNum from "./getRandomNum.js";
let api = "2178805732895c405ad40272d41af6ef";

function setFlickrBackground(params) {
  const prevArrow = document.querySelector(".slide-prev");
  const nextArrow = document.querySelector(".slide-next");
  const tag = document.querySelector(".background-tag");

  async function getBackground() {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=2178805732895c405ad40272d41af6ef&tags=${tag.value}&extras=url_l&format=json&nojsoncallback=1`;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    let backgroundNum = getRandomNum(0, data.photos.photo.length - 1);
    const selectedBackground = document.querySelector(".background-select");

    function setBackground() {
      const img = new Image();
      img.src = data.photos.photo[backgroundNum].url_l;
      img.onload = () => {
        document.body.style.backgroundImage = `url('${img.src}')`;
      };
    }
    setBackground();
    prevArrow.addEventListener("click", getNewSlide);
    nextArrow.addEventListener("click", getNewSlide);

    function getNewSlide() {
      backgroundNum = getRandomNum(0, data.photos.photo.length - 1);
      setBackground();
    }
  }
  getBackground();
}

export default setFlickrBackground;
