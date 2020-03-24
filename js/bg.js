const body = document.querySelector("body");

const IMG_NUM = 8,
  IMG_CN = "bg-img";

function paintImg(imgNumber) {
  const image = new Image();
  image.src = `image/${imgNumber + 1}.jpg`;
  image.classList.add(IMG_CN);
  body.prepend(image);
}

function genNumber() {
  const number = Math.floor(Math.random() * IMG_NUM);
  return number;
}

function init() {
  const randomNumber = genNumber();
  paintImg(randomNumber);
}

init();
