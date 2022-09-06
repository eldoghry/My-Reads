import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookGrid from "./BookGrid";
import * as BookAPI from "../BooksAPI";
import Loader from "./Loader";
import Message from "./Message";
import PropTypes from "prop-types";

function SearchForm({ findMybook, updateBooks }) {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    setSearch(e.target.value.toLowerCase().trim());
  };

  useEffect(() => {
    setQuery([]);
    setError("");

    if (search.length) {
      setIsLoading(true);
      const searchBook = async () => {
        const res = await BookAPI.search(search, 20);
        setIsLoading(false);

        if (!res.error) {
          const shelfingBooks = res.map((b) => {
            const shelfed = findMybook(b.id);
            if (shelfed) {
              return { ...b, shelf: shelfed.shelf };
            }
            return b;
          });
          setQuery([...shelfingBooks]);
          setError("");
        } else {
          setQuery([]);
          setError(res.error);
        }
      };

      searchBook();
    } else {
      setQuery([]);
    }
  }, [search]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Closex
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
          <BookGrid books={query} updateBooks={updateBooks} />
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
