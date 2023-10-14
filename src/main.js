import operate from "./calculate.js";
import populateMainDisplay from "./populateMainDisplay.js";
import emptyMainDisplay from "./emptyMainDisplay.js";
import populateUpperDisplay from "./populateUpperDisplay.js";
import emptyUpperDisplay from "./emptyUpperDisplay.js";

const numButtons = document.querySelectorAll(".num-button");
const deleteButton = document.querySelector("#delete-button");
const operationButtons = document.querySelectorAll(".operation-button");
const mainDisplay = document.querySelector("#mid-disp-content");
const upperDisplay = document.querySelector("#upper-disp-content");

numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    populateMainDisplay(button.id);
  });
});

deleteButton.addEventListener("click", () => {
  emptyMainDisplay();
  emptyUpperDisplay();a
})

operationButtons.forEach((button) => {
  button.addEventListener(("click"), () => {
    populateUpperDisplay(mainDisplay.textContent + button.id);
    emptyMainDisplay()
  })
})