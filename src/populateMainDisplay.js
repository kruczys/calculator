const populateMainDisplay = (value) => {
  const display = document.querySelector("#mid-disp-content");
  display.textContent += value;
};

export default populateMainDisplay;
