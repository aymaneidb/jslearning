// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
var bookList1 = bookList;
function add (bookList1,bookName) {

  bookList1.push(bookName);
  return bookList1;
  
  // Change code above this line
}

// Change code below this line
function remove (bookList1,bookName) {
  var book_index = bookList1.indexOf(bookName);
  if (book_index >= 0) {

    bookList1.splice(book_index, 1);
    return bookList1;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
