import BookShelf from "./BookShelf";
import OpenSearchButton from "./OpenSearchButton";

function ListBook({gotToSearchPage}) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf title="Currently Reading" />
          <BookShelf title="Want to Read" />
          <BookShelf title="Read" />
        </div>
      </div>
      <OpenSearchButton
        gotToSearchPage={gotToSearchPage}
      />
    </div>
  );
}

export default ListBook;
