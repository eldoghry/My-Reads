function OpenSearchButton({ gotToSearchPage }) {
  return (
    <div className="open-search">
      <a onClick={gotToSearchPage}>Add a book</a>
    </div>
  );
}

export default OpenSearchButton;
