import { useEffect, useState } from "react";
import BookShelf from "./BookShelf";
import Loader from "./Loader";
import Message from "./Message";
import SearchButton from "./SearchButton";
import PropTypes from "prop-types";
import { Header } from "./Header";

function ListBook({ books, updateBooks }) {
  const [isLoading, setIsLoading] = useState(false);
  const shelves = [
    {
      id: 1,
      shelfName: "currentlyReading",
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
  ];

  useEffect(() => {
    setIsLoading(true);
    if (books.length) {
      setIsLoading(false);
    }
  }, [books]);

  return (
    <div className="list-books">
      <Header />
      <div className="list-books-content">
        {isLoading && <Loader />}

        {books.length > 0 && (
          <div>
            {shelves.map((shelf) => {
              const shelfBooks = books.filter(
                (b) => b.shelf === shelf.shelfName
              );

              return (
                <BookShelf
                  key={shelf.id}
                  title={shelf.shelfDisplayName}
                  shelfBooks={shelfBooks}
                  updateBooks={updateBooks}
                />
              );
            })}
          </div>
        )}

        {books.length === 0 && (
          <Message msg="add some book to read" type="info" />
        )}
      </div>
      <SearchButton />
    </div>
  );
}

ListBook.prototype = {
  books: PropTypes.array.isRequired,
  updateBooks: PropTypes.func.isRequired,
};

export default ListBook;
