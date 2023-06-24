// Get the list items and increment buttons
const listItems = document.querySelectorAll("#language-list li");
const incrementButtons = document.querySelectorAll(".increment-btn");

// Create an object to store the language counts
const languageCounts = {};

// Initialize the language counts to 0
listItems.forEach((item) => {
  const language = item.getAttribute("data-lang");
  languageCounts[language] = 0;
});

// Add click event listener to each increment button
incrementButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const listItem = button.parentNode;
    const language = listItem.getAttribute("data-lang");

    // Increment the count for the clicked language
    languageCounts[language]++;

    // Update the count text
    const countText = listItem.querySelector(".count");
    countText.textContent = languageCounts[language].toString();
  });
});
