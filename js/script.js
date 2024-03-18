const play = document.querySelector(".start");

const row = document.querySelector(".row.f-wrap");

const facile = document.querySelector("option[value=facile]");
const media = document.querySelector("option[value=media]");
const difficile = document.querySelector("option[value=difficile]");

let lato = 0;

facile.addEventListener("click", function () {
  nameFacile = "col-facile";
  lato = 10;
});
media.addEventListener("click", function () {
  nameFacile = "col-media";
  lato = 9;
});
difficile.addEventListener("click", function () {
  nameFacile = "col-difficile";
  lato = 7;
});

// console.log(row);
let nameFacile = "";
play.addEventListener("click", function () {
  console.log(lato);
  let quadrato = lato ** 2;
  for (i = 0; i < quadrato; i++) {
    createGrid();
  }
});

function createGrid() {
  const cell = document.createElement("div");
  row.append(cell);

  cell.className = nameFacile;
  cell.innerHTML = i + 1;
  cell.addEventListener("click", function () {
    cell.classList.toggle("col-clicked");
  });
}
