let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let newArray = [];
let button = document.querySelector("button");

window.onload = chColor;

function chColor() {
  newArray = [];
  for (i = 0; i < 6; i++) {
    newArray.push(hexArray[Math.trunc(Math.random() * hexArray.length)]);
  }
  let finalColor = `#${newArray.join("")}`;
  document.body.style.backgroundColor = finalColor;
  document.querySelector("div span").innerHTML = finalColor;
  document.querySelector("div span").style.color = finalColor;
}

button.onclick = chColor;
