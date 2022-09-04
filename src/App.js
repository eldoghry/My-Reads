import "./App.css";
import { useState } from "react";
import ShelfChanger from "./components/ShelfChanger";
import SearchForm from "./components/SearchForm";
import OpenSearchButton from "./components/OpenSearchButton";
import BookShelf from "./components/BookShelf";
import ListBook from "./components/ListBook";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchForm
          gotToSearchPage={() => setShowSearchpage(!showSearchPage)}
        />
      ) : (
        <ListBook gotToSearchPage={() => setShowSearchpage(!showSearchPage)} />
      )}
    </div>
  );
}

export default App;
