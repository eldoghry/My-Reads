import Book from "./Book";
import PropTypes from "prop-types";

function BookGrid({ books, updateBooks }) {
  return (
    <ol className="books-grid">
      {books.map((book) => (
        <li key={book.id}>
          <Book key={book.id} book={book} updateBooks={updateBooks} />
        </li>
      ))}
    </ol>
  );
}

BookGrid.prototype = {
  books: PropTypes.array.isRequired,
  updateBooks: PropTypes.func.isRequired,
};

export default BookGrid;
