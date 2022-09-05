import "./App.css";
import { useEffect, useState } from "react";
import SearchForm from "./components/SearchForm";
import ListBook from "./components/ListBook";
import * as BookAPI from "./BooksAPI";
import { Routes, Route } from "react-router-dom";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let mounted = false;

    if (!mounted) {
      const allBooks = async () => {
        const res = await BookAPI.getAll();
        setBooks(res);
        console.log("mounted, load once");
      };

      allBooks();
    }

    return () => {
      mounted = true;
      console.log("unmounted");
    };
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" exact element={<ListBook books={books} />} />
        <Route path="/search" element={<SearchForm />} />
      </Routes>
    </div>
  );
}

export default App;
