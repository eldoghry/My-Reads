function ShelfChanger({ currentShelf, book, updateBookShelf }) {
  const changeShelf = (shelf) => {
    if (shelf !== currentShelf) {
      book.shelf = shelf;
      updateBookShelf(book, shelf);
    }
  };

  return (
    <div className="book-shelf-changer">
      <select
        onChange={(e) => changeShelf(e.target.value)}
        value={currentShelf}
      >
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default ShelfChanger;
