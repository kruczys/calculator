import addTwo from "./addTwoElements.js";
import divideTwo from "./divideTwoElements.js";
import multiplyTwo from "./multiplyTwoElements.js";
import subtractTwo from "./subtractTwoElements.js";

const operate = (left, operator, right) => {
  switch (operator) {
    case "+":
      return addTwo(left, right);
    case "-":
      return subtractTwo(left, right);
    case "*":
      return multiplyTwo(left, right);
    case "/":
      return divideTwo(left, right);
    default:
      break;
  }
};

export default operate;
