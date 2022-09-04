function ShelfChanger({ currentShelf }) {
  return (
    <div className="book-shelf-changer">
      <select>
        <option value="none" disabled>
          Move to...
        </option>
        <option
          value="currentlyReading"
          disabled={currentShelf === "currentlyReading"}
        >
          Currently Reading
        </option>
        <option value="wantToRead" disabled={currentShelf === "wantToRead"}>
          Want to Read
        </option>
        <option value="read" disabled={currentShelf === "read"}>
          Read
        </option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default ShelfChanger;
