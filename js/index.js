// Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links ul");

toggleBtn.onclick = function (e) {
  e.stopPropagation();
  this.classList.toggle("menu-active");
  tLinks.classList.toggle("open");
};

document.addEventListener("click", (e) => {
  if (e.target !== toggleBtn && e.target !== tLinks) {
    if (tLinks.classList.contains("open")) {
      toggleBtn.classList.toggle("menu-active");
      tLinks.classList.toggle("open");
    }
  }
});
tLinks.onclick = function (e) {
  e.stopPropagation();
};

// slidShow
let landing = document.querySelector(".landing");

let arr = [
  "imgs/landing-18.jpg",
  "imgs/landing-1.jpg",
  "imgs/landing-19.jpg",
  "imgs/landing-21.jpg",
  "imgs/landing-14.jpg",
  "imgs/landing-15.jpg",
  "imgs/landing-16.jpg",
  "imgs/landing-17.jpg",
  "imgs/landing-20.jpg",
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

// dropdown menu
const dropdownBtn = document.querySelector(".dropdown");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownBtn.addEventListener("click", dropMenu);

function dropMenu(e) {
  e.preventDefault();
  dropdownMenu.classList.toggle("show");
}

// services
const servicesCategories = document.querySelectorAll(
  ".services .categeories .categeory"
);
const servicesProducts = document.querySelectorAll(".services .content .box");

servicesCategories.forEach((category) => {
  category.addEventListener("click", () => {
    const valueAttr = category.getAttribute("data-filter");

    servicesProducts.forEach((product) => {
      product.style.display = "none";

      if (
        product.getAttribute("data-filter").toLowerCase() ===
        valueAttr.toLowerCase()
      ) {
        product.style.display = "flex";
      }
    });

    servicesProducts.forEach((product) => {
      product.classList.remove("actives");
    });
    servicesProducts.forEach((product) => {
      product.classList.add("actives");
    });

    servicesCategories.forEach((category) => {
      category.classList.remove("active");
    });
    category.classList.add("active");
  });
});

slideShow();
