function switchStylesheet() {
    const themeSelect = document.getElementById("theme-select");
    const selectedTheme = themeSelect.options[themeSelect.selectedIndex].value;
    const themeStylesheet = document.getElementById("theme-stylesheet");
    themeStylesheet.setAttribute("href", "./src/css/" + selectedTheme + ".css");
  }

//   What this code does 

// 1. it gets the DOM element with the ID "theme-select" using the document.getElementById method and stores it in a constant variable named "themeSelect".
// 2. It gets the selected option value from the "themeSelect" dropdown list using the selectedIndex property and stores it in a constant variable named "selectedTheme".
// 3. It gets the DOM element with the ID "theme-stylesheet" using the document.getElementById method and stores it in a constant variable named "themeStylesheet".
// 4. It sets the href attribute of the "themeStylesheet" element to the path of the selected theme CSS file using the setAttribute method