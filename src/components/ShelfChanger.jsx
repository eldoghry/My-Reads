import PropTypes from "prop-types";

function ShelfChanger({ currentShelf, onChangeShelf }) {
  const changeShelf = (shelf) => {
    onChangeShelf(shelf);
  };

  return (
    <div className="book-shelf-changer">
      <select
        onChange={(e) => changeShelf(e.target.value)}
        value={currentShelf || "none"}
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

ShelfChanger.prototype = {
  currentShelf: PropTypes.string.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default ShelfChanger;
