"use strict";
//init
document.addEventListener("DOMContentLoaded", init);
//Get the entire text from the HTML
const elem = document.querySelector("#cooltext");
const text = elem.textContent;

function init() {
  elem.textContent = "";
  //For each character in the text
  //create a <span> element
  //put the character inside that element
  //and append the element to the HTML
  for (let i = 0; i < text.length; i++) {
    setTimeout(function() {
      let spanElem = document.createElement("span");
      spanElem.textContent = text[i];
      spanElem.classList.add("cool-animation");
      elem.appendChild(spanElem);
    }, i * 50);
  }
}
