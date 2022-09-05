import BookGrid from "./BookGrid";

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

export default BookShelf;
