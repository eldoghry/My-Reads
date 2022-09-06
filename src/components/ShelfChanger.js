import PropTypes from "prop-types";

function ShelfChanger({ currentShelf, onChangeShelf }) {
  const shelves = [
    {
      id: 1,
      shelfName: "currentReading",
      shelfDisplayName: "Currently Reading",
    },
    {
      id: 2,
      shelfName: "wantToRead",
      shelfDisplayName: "Want to Read",
    },
    {
      id: 3,
      shelfName: "read",
      shelfDisplayName: "Read",
    },
    {
      id: 4,
      shelfName: "none",
      shelfDisplayName: "None",
    },
  ];

  const changeShelf = (shelf) => {
    onChangeShelf(shelf);
  };

  return (
    <div className="book-shelf-changer">
      <select
        onChange={(e) => changeShelf(e.target.value)}
        value={currentShelf || "none"}
      >
        <option disabled>Move to...</option>

        {shelves.map((shelf) => (
          <option key={shelf.id} value={shelf.shelfName}>
            {shelf.shelfDisplayName}
          </option>
        ))}
      </select>
    </div>
  );
}

ShelfChanger.prototype = {
  currentShelf: PropTypes.string.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default ShelfChanger;
