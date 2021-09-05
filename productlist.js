const urlParams = new URLSearchParams(window.location.search);
// in the URL grab id and store its value in id
const season = urlParams.get("season");

document.querySelector("main>h2").textContent = season;

const url = "https://kea-alt-del.dk/t7/api/products?season=" + season;

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  //console.log(data);
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  // grab the template
  const template = document.querySelector("#smallProductTemplate").content;
  // clone it
  const copy = template.cloneNode(true);
  // change content

  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;

  copy.querySelector(
    ".subtle"
  ).textContent = `${product.articletype} | ${product.brandname}`;

  copy.querySelector("h3").textContent = product.displayname;

  // if the product is soldout than change class to soldOut, which then shows the SoldOut content
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }

  //if the product is on discount then change the class to discounted, which then shows the discount
  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");

    copy.querySelector(".discounted p").textContent =
      "Now DKK " +
      Math.round(product.price - (product.price * product.discount) / 100) +
      ",-";

    copy.querySelector(".percent").textContent = "-" + product.discount + "%";

    copy.querySelector(".price").textContent =
      "Prev. DKK" + product.price + ",-";
  } else {
    copy.querySelector(".price").textContent = "DKK " + product.price + ",-";
  }

  // grab parent
  const parent = document.querySelector("main");
  // append
  parent.appendChild(copy);
}
