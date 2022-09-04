import "./App.css";
import { useEffect, useState } from "react";
import SearchForm from "./components/SearchForm";
import ListBook from "./components/ListBook";
import * as BookAPI from "./BooksAPI";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let mounted = false;

    if (!mounted) {
      const allBooks = async () => {
        const res = await BookAPI.getAll();
        setBooks(res);
        console.log(books);
      };

      allBooks();
    }

    return () => {
      mounted = true;
    };
  }, []);

  // if (!books.length) {
  //   return <p>Looding ...</p>;
  // }

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchForm
          gotToSearchPage={() => setShowSearchpage(!showSearchPage)}
        />
      ) : (
        <ListBook
          books={books}
          gotToSearchPage={() => setShowSearchpage(!showSearchPage)}
        />
      )}
    </div>
  );
}

export default App;
