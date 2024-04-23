// slidShow

let landing = document.querySelector(".landing");

let arr = [
  "url('imgs/landing-1.jpg')",
  "url('imgs/landing-2.jpg')",
  "url('imgs/landing-3.jpg')",
  "url('imgs/landing-4.jpg')",
];
let i = 0;

function slideShow() {
  landing.style.backgroundImage = arr[i];
  if (i == arr.length - 1) {
    i = 0;
  } else {
    i++;
  }
  setTimeout(() => slideShow(), 3000);
}

slideShow();
