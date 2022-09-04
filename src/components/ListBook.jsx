import { useEffect, useState } from "react";
import BookShelf from "./BookShelf";
import OpenSearchButton from "./OpenSearchButton";

function ListBook({ books, gotToSearchPage }) {
  const [shelfs, setShelfs] = useState([]);

  useEffect(() => {
    const uniqueShelfs = [...new Set(books.map((b) => b.shelf))];
    setShelfs(uniqueShelfs);
  }, []);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelfs.map((shelf) => {
            const shelfBooks = books.filter((b) => b.shelf === shelf);

            return (
              <BookShelf
                // key={shelf}
                title={shelf.replace(/([A-Z]+)/g, " $1")}
                shelfBooks={shelfBooks}
              />
            );
          })}
        </div>
      </div>
      <OpenSearchButton gotToSearchPage={gotToSearchPage} />
    </div>
  );
}

export default ListBook;
