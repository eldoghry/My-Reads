import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookGrid from "./BookGrid";
import * as BookAPI from "../BooksAPI";
import Loader from "./Loader";
import Message from "./Message";
import PropTypes from "prop-types";

let debounce; // used for debounce feature

function SearchForm({ findMybook, updateBooks }) {
  const [query, setQuery] = useState("");
  const [returnedBooks, setReturnedBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    setQuery(e.target.value.toLowerCase().trim());
  };

  useEffect(() => {
    setReturnedBooks([]);
    setError("");
    clearTimeout(debounce);

    if (query.length) {
      setIsLoading(true);

      const searchBook = async () => {
        const res = await BookAPI.search(query, 20);
        setIsLoading(false);

        if (!res.error) {
          const shelfingBooks = res.map((b) => {
            const shelfed = findMybook(b.id);
            if (shelfed) {
              return { ...b, shelf: shelfed.shelf };
            }
            return b;
          });

          setReturnedBooks([...shelfingBooks]);
          setError("");
        } else {
          setError(res.error);
          setReturnedBooks([]);
        }
      };

      debounce = setTimeout(searchBook, 500);
    } else {
      setReturnedBooks([]);
    }
  }, [query]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>

        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="search-books-results">
        {isLoading && <Loader />}

        {error === "empty query" && (
          <Message msg="no result found" type="error" />
        )}

        {query && query.length > 0 && (
          <BookGrid books={returnedBooks} updateBooks={updateBooks} />
        )}
      </div>
    </div>
  );
}

SearchForm.prototype = {
  findMybook: PropTypes.func.isRequired,
  updateBooks: PropTypes.func.isRequired,
};

export default SearchForm;
