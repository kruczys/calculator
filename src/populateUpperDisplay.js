const populateUpperDisplay = (content) => {
    const display = document.querySelector("#upper-disp-content");
    display.textContent += content;
}

export default populateUpperDisplay;