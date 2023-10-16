import operate from "./calculate.js";
import populateMainDisplay from "./populateMainDisplay.js";
import emptyMainDisplay from "./emptyMainDisplay.js";
import populateUpperDisplay from "./populateUpperDisplay.js";
import emptyUpperDisplay from "./emptyUpperDisplay.js";

const numButtons = document.querySelectorAll(".num-button");
const deleteButton = document.querySelector("#delete-button");
const operationButtons = document.querySelectorAll(".operation-button");
const mainDisplay = document.querySelector("#mid-disp-content");
let memory = 0
let left = null;
let currentOperator = "+";
let right = null;

numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    populateMainDisplay(button.id);
  });
});

deleteButton.addEventListener("click", () => {
  emptyMainDisplay();
  emptyUpperDisplay();
  memory = 0;
  left = null;
  right = null;
})


operationButtons.forEach((button) => {
  button.addEventListener(("click"), () => {
    if (left === null) {
      left = +mainDisplay.textContent;
    } else if (right === null) {
      right = +mainDisplay.textContent;
      memory = operate(left, currentOperator, right);
      emptyMainDisplay();
      emptyUpperDisplay();
      populateMainDisplay(memory);
      left = memory
      right = null;
    }

    currentOperator = button.id;
    populateUpperDisplay(left + currentOperator);
    emptyMainDisplay();
  })
})

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener(("click"), () => {
  right = +mainDisplay.textContent;
  memory = operate(left, currentOperator, right);
  emptyMainDisplay();
  emptyUpperDisplay();
  populateMainDisplay(memory);
  memory = 0
  left = null
  right = null
})