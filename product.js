const urlParams = new URLSearchParams(window.location.search);
// in the URL grab id and store its value in id
const id = urlParams.get("id");

// url
const url = "https://kea-alt-del.dk/t7/api/products/" + id;

// fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  document.querySelector(".breadcrumbs .season-name").textContent =
    product.season;
  document.querySelector(".breadcrumbs .product-name").textContent =
    product.productdisplayname;
  copy.querySelector(
    "img.product-img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;

  copy.querySelector("img.brand-img").src = product.brandimage;
  /*
  copy.querySelector(
    ".season-name"
  ).href = `product.html?season=${season.season}`;
  copy.querySelector(
    ".product-name"
  ).href = `product.html?product=${product.productdisplayname}`;
*/

  document.querySelector("img.product-img").alt = product.productdisplayname;
  document.querySelector(".product-info .product-name").textContent =
    product.productdisplayname;
  document.querySelector(".product-info .product-gender").textContent =
    product.gender;
  document.querySelector(".product-info .product-category").textContent =
    product.category;
  document.querySelector(".product-info .product-type").textContent =
    product.articletype;
  document.querySelector(".product-info .product-brand").textContent =
    product.brandname;
  document.querySelector(".product-info .product-description").innerHTML =
    product.description;
  document.querySelector(".brand-info .product-brand").innerHTML =
    product.brandname;
}

// populate the page
