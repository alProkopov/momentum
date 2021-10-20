import playList from "./modules/playList.js";

const playBtn = document.querySelector(".play");
const prevBtn = document.querySelector(".play-prev");
const nextBtn = document.querySelector(".play-next");
const playListFragment = document.querySelector(".play-list");

const audio = new Audio();
let isPlay = false;
let playNum = 0;

playList.forEach((el,index) => {
  const li = document.createElement("li");
  li.classList.add("play-item");
  li.textContent = el.title;
  li.value = index;
  playListFragment.append(li)
  if (playNum==li.value) {li.classList.add('item-active')}
});

// console.log(playListFragment.children.forEach(el=>console.log(el)));

function playAudio(params) {
  switch (isPlay) {
    case false:
      audio.src = playList[playNum].src;
      audio.play();
      isPlay = true;
      toggleButtonAdd();
      break;

    case true:
      isPlay = false;
      toggleButtonRemove();
      audio.pause();

      break;

    default:
      break;
  }
}

function playPrev(e) {
  playNum--;
  if (playNum < 0) {
    playNum = playList.length - 1;
  }
  isPlay = false;
  activeElement()
  playAudio();
}

function playNext(e) {
  playNum++;
  if (playNum > playList.length - 1) {
    playNum = 0;
  }
  isPlay = false;
  activeElement()
  playAudio();
}

function toggleButtonAdd(params) {
  playBtn.classList.add("pause");
}

function toggleButtonRemove(params) {
  playBtn.classList.remove("pause");
}

function activeElement(params) {
  const HTML_Array = Array.from(playListFragment.children)
  HTML_Array.forEach((el,index)=> {
    playListFragment.children[index].classList.remove('item-active')
    if(playNum==el.value) playListFragment.children[index].classList.add('item-active')
  })

}
activeElement()

playBtn.addEventListener("click", playAudio);
prevBtn.addEventListener("click", playPrev);
nextBtn.addEventListener("click", playNext);
