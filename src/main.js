import operate from "./calculate.js";
import populateDisplay from "./populateDisplay.js";

const buttons = document.querySelectorAll(".num-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    populateDisplay(button.id);
  });
});
