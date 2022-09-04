import ShelfChanger from "./ShelfChanger";
import Book from "./Book";

function BookShelf({ title }) {
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
          <li>
            <Book />
          </li>
        </ol>
      </div>
    </div>
  );
}

export default BookShelf;
