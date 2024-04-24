// slidShow

let landing = document.querySelector(".landing");

let arr = [
  "imgs/landing-1.jpg",
  "imgs/landing-3.jpg",
  "imgs/landing-4.jpg",
  "imgs/landing-5.jpg",
  "imgs/landing-6.png",
  "imgs/landing-2.jpg",
  "imgs/landing-7.png",
  "imgs/landing-8.jpg",
  "imgs/landing-10.png",
  "imgs/landing-11.png",
];

let i = 0;

function slideShow() {
  landing.style.backgroundImage = `url(${arr[i]})`;
  if (i == arr.length - 1) {
    i = 0;
  } else {
    i++;
  }
  setTimeout(slideShow, 3000);
}

slideShow();
