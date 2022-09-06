import BookGrid from "./BookGrid";
import PropTypes from "prop-types";

function BookShelf({ shelfBooks, title, updateBooks }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <BookGrid books={shelfBooks} updateBooks={updateBooks} />
      </div>
    </div>
  );
}

BookShelf.prototype = {
  shelfBooks: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  updateBooks: PropTypes.func.isRequired,
};

export default BookShelf;
