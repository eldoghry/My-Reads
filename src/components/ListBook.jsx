import { useEffect, useState } from "react";
import BookShelf from "./BookShelf";
import Loader from "./Loader";
import SearchButton from "./SearchButton";

function ListBook({ books }) {
  const [shelfs, setShelfs] = useState([]);

  useEffect(() => {
    const uniqueShelfs = [...new Set(books.map((b) => b.shelf))];
    setShelfs(uniqueShelfs);
  }, [books]);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {!books.length && <Loader />}

        {books.length && (
          <div>
            {shelfs.map((shelf, index) => {
              const shelfBooks = books.filter((b) => b.shelf === shelf);

              return (
                <BookShelf
                  key={index}
                  title={shelf.replace(/([A-Z]+)/g, " $1")}
                  shelfBooks={shelfBooks}
                  
                />
              );
            })}
          </div>
        )}
      </div>
      <SearchButton/>
    </div>
  );
}

export default ListBook;
