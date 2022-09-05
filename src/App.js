import "./App.css";
import { useEffect, useState } from "react";
import SearchForm from "./components/SearchForm";
import ListBook from "./components/ListBook";
import * as BookAPI from "./BooksAPI";
import { Routes, Route } from "react-router-dom";

function App() {
  const [books, setBooks] = useState([]);

  const updateBooks = async (newBook, newShelf) => {
    await BookAPI.update(newBook, newShelf);
    const res = await BookAPI.getAll();
    setBooks([...res]);
  };

  useEffect(() => {
    let mounted = false;

    if (!mounted) {
      const allBooks = async () => {
        const res = await BookAPI.getAll();
        setBooks([...res]);
      };

      allBooks();
    }

    return () => {
      mounted = true;
    };
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          exact
          element={<ListBook books={books} updateBooks={updateBooks} />}
        />
        <Route
          path="/search"
          element={<SearchForm updateBooks={updateBooks} />}
        />
      </Routes>
    </div>
  );
}

export default App;
