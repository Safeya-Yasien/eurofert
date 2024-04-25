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
