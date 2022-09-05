import Book from "./Book";

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

export default BookGrid;
