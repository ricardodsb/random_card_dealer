/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let Number = Math.floor(Math.random() * 12 - 0) + 1;
  let randomnumber = (document.querySelector("#number").innerHTML = Number);
};
