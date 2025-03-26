async function getJoke(category) {
  // API URL 
  const url = `https://v2.jokeapi.dev/joke/${category}?safe-mode`;
  
  // Fetch joke from the API
  const response = await fetch(url);
  const data = await response.json(); // Convert the response into JSON
  
  // Set a default title using the category name
  let title = "A Random " + category + " Joke";
  
  // Special case for "Any" and "Pun" categories
  if (category === "Any") {
    title = "Joke Of The Day";
  }
  if (category === "Pun") {
    title = "A Random Pun";
  }
  
  // Change the heading on the webpage
  document.getElementById("jokeTitle").textContent = title;
  
  // Set the joke text based on the type (single or twopart)
  let jokeText = "";
  
  if (data.type === "single") {
    jokeText = data.joke;
  } else if (data.type === "twopart") {
    jokeText = data.setup + " ... " + data.delivery;
  }
  document.getElementById("jokeContent").textContent = jokeText;
}
  
// Random joke from any category
  window.onload = function () {
    getJoke("Any");
};
  