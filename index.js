// In index.js, there is an empty function, fetchBooks(), that is called when index.html is loaded. To pass this lab, this function should include a fetch request to the Game of Thrones API (https://anapioficeandfire.com/api/booksLinks to an external site.). The returned response should be converted to JSON. Then, it should call the second function, renderBooks(), passing in the JSON-ified data as the argument. To check if you have done this correctly, open up the index.html page of this lab; you should see a list of Game Of Thrones titles on your webpage.

// // // NOTE: The tests in this lab need to access the fetch() request you will create inside fetchBooks(). In order to give them access, write your solution so that fetchBooks() returns the fetch(). This will not change the behavior of your fetch().
// o convert the response to JSON, you can use the .json() method on the response object. In your code, you can chain another .then() method after the fetch request to handle the response and convert it to JSON. Here's an example of how you can modify code:

// function fetchBooks() {
//   return fetch("https://anapioficeandfire.com/api/books")
//     .then((resp) => resp.json())
//     .then((json) => {
//       console.log(json); // This will log the JSON data to the console
//       return json; // Return the JSON data
//     });
// } 
function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((json) => {
      renderBooks(json);
      return json;
    })
    .catch((error) => {
      console.log("Error fetching books:", error);
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  fetchBooks();
});