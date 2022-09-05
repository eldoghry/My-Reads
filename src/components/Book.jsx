import ShelfChanger from "./ShelfChanger";
import * as BookAPI from "./../BooksAPI";

function Book({ book }) {
  const updateBookShelf = async (b, shelf) => {
    const res = await BookAPI.update(b.id, shelf);
    console.log(res);
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
          updateBookShelf={updateBookShelf}
        />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors.join(", ")}</div>
    </div>
  );
}

export default Book;
