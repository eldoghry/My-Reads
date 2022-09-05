import ShelfChanger from "./ShelfChanger";
import * as BookAPI from "./../BooksAPI";

function Book({ book, updateBooks }) {
  const updateBookShelf = (shelf) => {
    book.shelf = shelf;
    updateBooks(book, shelf);
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${book.imageLinks.smallThumbnail}")`,
          }}
        ></div>
        <ShelfChanger
          currentShelf={book.shelf}
          book={book}
          onChangeShelf={updateBookShelf}
        />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors.join(", ")}</div>
    </div>
  );
}

export default Book;
