import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as BooksAPI from "./../BooksAPI";
import BookPage from "./BookPage";
import { Header } from "./Header";
import Loader from "./Loader";
import Message from "./Message";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = false;
    setIsLoading(true);

    if (!mounted) {
      const getBook = async () => {
        try {
          const res = await BooksAPI.get(id);
          setIsLoading(false);
          setBook(res);
        
        } catch (err) {
          setError("there is no result available");
        }
      };

      getBook();
    }

    return () => {
      mounted = true;
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="book-details-content">
        {isLoading && <Loader />}
        {error && <Message msg={error} type="error" />}
        {book && <BookPage book={book} />}
      </div>
    </div>
  );
}

export default BookDetails;
