import ShelfChanger from "./ShelfChanger";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Book({ book, updateBooks }) {
  const updateBookShelf = (shelf) => {
    book.shelf = shelf;
    updateBooks(book, shelf);
  };

  return (
    <div className="book">
      <div className="book-top">
        <Link to={`/book/${book.id}`}>
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${book.imageLinks?.smallThumbnail}")`,
            }}
          ></div>
        </Link>
        <ShelfChanger
          currentShelf={book.shelf}
          book={book}
          onChangeShelf={updateBookShelf}
        />
      </div>
      <div className="book-title">{book?.title}</div>
      <div className="book-authors">
        {book.authors?.length && book.authors.join(", ")}
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateBooks: PropTypes.func.isRequired,
};

export default Book;
