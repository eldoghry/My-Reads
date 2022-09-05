import { Link } from "react-router-dom";

function OpenSearchButton() {
  return (
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  );
}

export default OpenSearchButton;
