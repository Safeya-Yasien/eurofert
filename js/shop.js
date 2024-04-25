const categories = document.querySelectorAll(".shop .category");

const products = document.querySelectorAll(".shop .product");

categories.forEach((category) => {
  category.addEventListener("click", () => {
    const valueAttr = category.getAttribute("data-filter");

    products.forEach((product) => {
      product.style.display = "none";

      if (
        product.getAttribute("data-filter").toLowerCase() ===
          valueAttr.toLowerCase() ||
        valueAttr == "all"
      ) {
        product.style.display = "flex";
      }
    });
  });
});

// load more
const loadMore = document.querySelector(".load-more");
console.log(loadMore);
products.forEach((product, index) => {
  if (index >= 6) {
    product.style.display = "none";
  }
});

loadMore.addEventListener("click", () => {
});
