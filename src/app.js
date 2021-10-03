/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let numbers = Math.floor(Math.random() * 12 - 0) + 1;
  let numberDiv = (document.querySelector("#number").innerHTML = numbers);

  if (numbers == 11) {
    numberDiv.innerHTML = "K";
  } else if (numbers == 0) {
    numberDiv.innerHTML = "A";
  } else if (numbers == 10) {
    numberDiv.innerHTML = "Q";
  } else if (numbers == 9) {
    numberDiv.innerHTML = "J";
  }
};
