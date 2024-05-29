const resultsDiv = document.querySelector(".results");
const hiddenDiv = document.querySelector(".hiddenDiv");
const dogAgeResults = document.querySelector(".dogAgeResults");
const catAgeResults = document.querySelector(".catAgeResults");
const smallDogDiv = document.querySelector(".hiddenDiv#smallDog");
const mediumDogDiv = document.querySelector(".hiddenDiv#mediumDog");
const largeDogDiv = document.querySelector(".hiddenDiv#largeDog");
// Get the button element
const dogButton = document.querySelector("#dogResultsButton");
const catButton = document.querySelector("#catResultsButton");

// Function to calculate dog age
function calculateDogAge() {
  let humanAge = document.getElementById("humanAge").value;
  let dogBreed = document.getElementById("dogBreed").value;
  let dogAge = ""; // Initialize dogAge to empty string

  if (dogBreed === "small") {
    animateHiddenDiv(false, largeDogDiv);
    animateHiddenDiv(false, mediumDogDiv);
    animateHiddenDiv(true, smallDogDiv); // Show the smallDogDiv element
    dogAge = humanAge * 5;
  } else if (dogBreed === "medium") {
     animateHiddenDiv(false, largeDogDiv);
    animateHiddenDiv(true, mediumDogDiv);
    animateHiddenDiv(false, smallDogDiv);  // Show the mediumDogDiv element
    dogAge = humanAge * 6;
   
  } else if (dogBreed === "large") {
    animateHiddenDiv(true, largeDogDiv);
    animateHiddenDiv(false, mediumDogDiv);
    animateHiddenDiv(false, smallDogDiv); // Show the largeDogDiv element
    dogAge = humanAge * 7;
  }

  document.querySelector(
    ".results"
  ).textContent = `Your ${dogBreed} dog's age in dog years is: ${dogAge}`;
}

// Calculate cat age function
function calculateCatAge() {
  let catHumanAge = document.getElementById("catHumanAge").value;
  let catAge = 0;

  if (catHumanAge === "0") {
    catAge = 0;
  } else if (catHumanAge === "1") {
    catAge = 15;
  } else if (catHumanAge === "2") {
    catAge = 24;
  } else {
    catAge = 24 + (catHumanAge - 2) * 4;
  }

  document.querySelector(
    ".results"
  ).textContent = `In cat years your cat is ${catAge} years old.`;
}

// Show the hiddenDiv element
dogButton.addEventListener("click", () => {
  // Toggle the "show" class on the hiddenDiv element
  hiddenDiv.classList.toggle("show");
});

function animateHiddenDiv(show, hiddenDiv) {
  let opacity = show ? 0 : 1;
  hiddenDiv.style.display = "block";
  let interval = setInterval(() => {
    opacity += show ? 0.1 : -0.1;
    hiddenDiv.style.opacity = opacity;
    if ((show && opacity >= 1) || (!show && opacity <= 0)) {
      clearInterval(interval);
      hiddenDiv.style.display = show ? "block" : "none";
    }
  }, 50);
}

// Add event listener to dogBreed selector element. Hide the hiddenDiv element on change
dogBreed.addEventListener("change", () => {
  // Hide the hiddenDiv element
  if (hiddenDiv.classList.contains("show")) {
    animateHiddenDiv(false, hiddenDiv); // Hide the hiddenDiv element with animation
  }
});

