// Select the input field and suggestions container elements
const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

// Array containing various fruit names
const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

// Function to filter and return matching fruit based on user input
function search(str) {
  const results = [];

  // Filter the fruit array based on user input and add matching items to results
  fruit.filter((val) =>
    val.toLowerCase().includes(str) ? results.push(val) : null
  );

  return results;
}

// Event handler for user input in the search bar
function searchHandler(e) {
  // Extract lowercase input value from the event
  const inputVal = e.target.value.toLowerCase();
  // Search for matching fruit based on the input value
  const results = search(inputVal);
  // Display matching fruit suggestions or reset suggestions if no input
  inputVal ? showSuggestions(results) : (suggestions.innerText = "");
}

// Display matching fruit suggestions in the dropdown
function showSuggestions(results) {
  // Clear existing suggestions
  suggestions.innerText = "";

  if (results.length > 0) {
    // Display up to the first five matching suggestions
    for (let i = 0; i < results.length && i < 5; i++) {
      // Create a new list item element
      const newLi = document.createElement("li");
      // Set the text of the list item to the current suggestion
      newLi.innerText = results[i];
      // Append the list item to the suggestions container
      suggestions.appendChild(newLi);
    }
  }
}

// Toggle the highlight class on suggestions during mouseover/mouseout
function toggleHighlight(e) {
  const targetClass = e.target.classList;
  const eventType = e.type;

  if (eventType === "mouseover") {
    // Add the highlight class when hovering over a suggestion
    targetClass.add("highlight");
  } else if (eventType === "mouseout") {
    // Remove the highlight class when hovering away from a suggestion
    targetClass.remove("highlight");
  }
}

// Use the selected suggestion when clicked
function useSuggestion(e) {
  // Get the fruit suggestion value from the clicked element
  const fruitVal = e.target.innerText;
  // Set the search input value to the selected fruit value
  input.value = fruitVal;
  // Clear suggestions after using a suggestion
  suggestions.innerText = "";
}

// Add event listeners for user interactions
input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("mouseover", toggleHighlight);
suggestions.addEventListener("mouseout", toggleHighlight);
suggestions.addEventListener("click", useSuggestion);
