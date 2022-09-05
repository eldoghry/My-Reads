import Book from "./Book";

function BookShelf({ shelfBooks, title, updateBooks }) {
  /*
        need:
        - shelf title
        - books    
    */

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {shelfBooks.map((book) => (
            <li key={book.id}>
              <Book key={book.id} book={book} updateBooks={updateBooks} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default BookShelf;
