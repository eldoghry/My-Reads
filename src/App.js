import "./App.css";
import { useEffect, useState } from "react";
import SearchForm from "./components/SearchForm";
import ListBook from "./components/ListBook";
import * as BookAPI from "./BooksAPI";
import { Routes, Route } from "react-router-dom";
import BookDetails from "./components/BookDetails";

function App() {
  const [books, setBooks] = useState([]);

  const updateBooks = async (newBook, newShelf) => {
    await BookAPI.update(newBook, newShelf);
    setBooks([...books.filter((b) => b.id !== newBook.id), newBook]);
  };

  const findBook = (id) => books.find((b) => b.id === id);

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
          element={
            <SearchForm findMybook={findBook} updateBooks={updateBooks} />
          }
        />

        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </div>
  );
}

export default App;
