"use strict";

const grid = document.querySelector(".grid");

const boxes = document.querySelectorAll(".cell");

let randomNumber = Math.floor(Math.random() * 16);

let itCell = boxes[randomNumber];
itCell.setAttribute("id", "it");

let colorFunction = (e) => {
  //I am creating a function to call on grid
  if (event.target.getAttribute("id", "it") === "it") {
    event.target.style.background = "red";
    event.target.innerText = "IT!";
    grid.removeEventListener("click", colorFunction);
    let body = document.querySelector("body");
    body.style.backgroundColor = "black";
  } else if (
    event.target.getAttribute("id", "it") !== "it" &&
    event.target.classList.contains("cell")
  ) {
    event.target.classList.add("clicked");
  }
};

grid.addEventListener("click", colorFunction);
