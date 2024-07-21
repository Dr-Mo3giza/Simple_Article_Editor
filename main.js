// Extracting main components
let fontSelectBox = document.getElementById("font-name");
let allHoverElements = document.querySelectorAll(".hover-style");
let fontBold = document.querySelector(".bold");
let fontSizeBox = document.querySelector(".font-size");
let fontMinBtn = document.querySelector(".font-min");
let fontMaxBtn = document.querySelector(".font-max");
let invertBtn = document.querySelector(".invert");
let previewBox = document.querySelector(".preview-box");

//Font selection preview function
fontSelectBox.addEventListener("input", () => {
  previewBox.style.fontFamily = fontSelectBox.value;
});

// All Buttons Styling On Hover
allHoverElements.forEach((button) => {
  button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "#e0dfdf";
  });
  button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "";
  });
});

// Font Weight Bold Function
fontBold.addEventListener("click", () => {
  if (previewBox.style.fontWeight != "bold") {
    previewBox.style.fontWeight = "bold";
    fontBold.style.color = "#009688";
  } else {
    previewBox.style.fontWeight = "";
    fontBold.style.color = "";
  }
});

// Font Size Declaration Inside Font Size Box
fontSizeBox.textContent = parseInt(getComputedStyle(previewBox).fontSize);

// Control Font Size
// Decreasing Font Size
fontMinBtn.addEventListener("click", () => {
  fontMaxBtn.style.color = "";
  if (fontSizeBox.textContent <= "16") {
    fontMinBtn.style.color = "#999999db";
  } else if (fontSizeBox.textContent > "16") {
    fontMinBtn.style.color = "";
    fontSizeBox.textContent--;
  }
  previewBox.style.fontSize = `${fontSizeBox.textContent}px`;
});

// Increasing Font Size
fontMaxBtn.addEventListener("click", () => {
  fontMinBtn.style.color = "";
  if (fontSizeBox.textContent >= "22") {
    fontMaxBtn.style.color = "#999999db";
  } else if (fontSizeBox.textContent < "22") {
    fontMaxBtn.style.color = "";
    fontSizeBox.textContent++;
  }
  previewBox.style.fontSize = `${fontSizeBox.textContent}px`;
});

// Invert Color Function
invertBtn.addEventListener("click", () => {
  let tempColor = getComputedStyle(previewBox).backgroundColor;
  previewBox.style.backgroundColor = getComputedStyle(previewBox).color;
  previewBox.style.color = tempColor;
});
