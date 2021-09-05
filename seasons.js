const url = "https://kea-alt-del.dk/t7/api/seasons";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleSeasonList(data);
  });

function handleSeasonList(data) {
  //console.log(data);
  data.forEach(showSeason);
}

function showSeason(season) {
  console.log(season);
  // grab the template
  const template = document.querySelector("#seasonTemplate").content;
  // clone it
  const copy = template.cloneNode(true);
  // change content
  copy.querySelector("a").textContent = season.season;

  copy.querySelector("a").href = `productlist.html?season=${season.season}`;
  // grab parent
  const parent = document.querySelector("main");
  // append
  parent.appendChild(copy);
}
