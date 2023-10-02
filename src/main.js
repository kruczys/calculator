import operate from "./calculate.js";
import populate from "./populateDisplay.js";

const buttons = document.querySelectorAll(".num-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    populate(button.id);
  });
});
