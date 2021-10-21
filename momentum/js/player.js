import playList from "./modules/playList.js";

const playBtn = document.querySelector(".play");
const prevBtn = document.querySelector(".play-prev");
const nextBtn = document.querySelector(".play-next");
const playListFragment = document.querySelector(".play-list");
const songTitle = document.querySelector(".song-name");

const volumeProgress = document.querySelector(".volume-progress");
const muteButton = document.querySelector(".mute-button");

const durationProgress = document.querySelector(".duration-progress");
const currentTime = document.querySelector(".current-time");
const durationTime = document.querySelector(".duration-time");

const audio = new Audio();
let isPlay = false;
let playNum = 0;
audio.src = playList[playNum].src;

playList.forEach((el, index) => {
  const li = document.createElement("li");
  li.classList.add("play-item");
  li.textContent = el.title;
  li.value = index;
  playListFragment.append(li);
  if (playNum == li.value) {
    li.classList.add("item-active");
  }
});

function playAudio(params) {
  // audio.src = playList[playNum].src;

  switch (isPlay) {
    case false:
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
  audio.src = playList[playNum].src;

  isPlay = false;
  activeElement();
  playAudio();
}

function playNext(e) {
  playNum++;

  if (playNum > playList.length - 1) {
    playNum = 0;
  }
  audio.src = playList[playNum].src;

  isPlay = false;
  activeElement();
  playAudio();
}

function toggleButtonAdd(params) {
  playBtn.classList.add("pause");
}

function toggleButtonRemove(params) {
  playBtn.classList.remove("pause");
}

function activeElement(params) {
  const HTML_Array = Array.from(playListFragment.children);
  HTML_Array.forEach((el, index) => {
    playListFragment.children[index].classList.remove("item-active");
    if (playNum == el.value) {
      playListFragment.children[index].classList.add("item-active");
      songTitle.textContent = playListFragment.children[index].textContent;
    }
  });
}

function volumeHandler(params) {
  audio.volume = this.value;
  audio.volume == 0
    ? (muteButton.style.opacity = 0.3)
    : (muteButton.style.opacity = 0.8);
}

function volumeToggle() {
  if (audio.volume == 0) {
    volumeProgress.value = 0.5;
    audio.volume = volumeProgress.value;
  } else {
    volumeProgress.value = 0;
    audio.volume = volumeProgress.value;
  }
  audio.volume == 0
    ? (muteButton.style.opacity = 0.3)
    : (muteButton.style.opacity = 0.8);
}

function updateProgress() {
  durationProgress.max = audio.duration;
  durationProgress.value = audio.currentTime;
  currentTime.textContent = formatTime(audio.currentTime);
  durationTime.textContent = formatTime(audio.duration);
  

  if (audio.currentTime == audio.duration) playNext();
}

function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds - min * 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }

  return `${min}:${sec}`;
}

function changeProgress() {
  audio.currentTime = durationProgress.value;
}

setInterval(updateProgress, 1000);
playBtn.addEventListener("click", playAudio);
prevBtn.addEventListener("click", playPrev);
nextBtn.addEventListener("click", playNext);
window.addEventListener("load", activeElement);

volumeProgress.addEventListener("mousemove", volumeHandler);
volumeProgress.addEventListener("change", volumeHandler);
muteButton.addEventListener("click", volumeToggle);

playListFragment.addEventListener('click', chooseSong)


function chooseSong(e){
  console.log(e.target);

  // isPlay == false? isPlay=true: isPlay=false
  playNum = e.target.value;
  audio.src = playList[playNum].src;
  if (!e.target.classList.contains('item-active')) {isPlay=false}
  console.log(e.target.classList.contains('item-active'));

  document.querySelectorAll('.play-item').forEach(item=>item.classList.remove('item-active'))

  if (playNum == e.target.value) {
    e.target.classList.add("item-active");
  }

  songTitle.textContent=e.target.textContent
  playAudio()
  stopPropagation()
}
