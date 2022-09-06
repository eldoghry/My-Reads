import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function BookPage({ book }) {
  return (
    <div className="book-container">
      <div className="book-left">
        <div
          className="book-cover"
          style={{
            height: 193,
            backgroundSize: "contain",
            backgroundImage: `url("${book?.imageLinks?.smallThumbnail}")`,
          }}
        ></div>

        <a href={book?.previewLink} className="btn btn-green">
          want to read
        </a>

        <Link to="/" className="btn">
          going back
        </Link>
      </div>
      <div className="book-right">
        <h1 className="book-heading">{book?.title}</h1>
        <h3 className="book-subtitle">{book?.subtitle}</h3>

        {book?.authors?.length && (
          <p className="book-authors-name">
            by
            <span>{book?.authors.join(", ")}</span>
          </p>
        )}

        <div className="book-edition-info">
          <h2>Edition Notes</h2>
          <ul>
            {book?.publishedDate && (
              <li>
                <p>Publish Date</p>
                <p>{book?.publishedDate}</p>
              </li>
            )}

            {book?.publisher && (
              <li>
                <p>Publisher</p>
                <p>{book?.publisher}</p>
              </li>
            )}

            {book?.language && (
              <li>
                <p>Language</p>
                <p>{book?.language}</p>
              </li>
            )}
          </ul>
        </div>

        <div className="book-info-container">
          <div className="book-info">
            <h2>The Physical Object</h2>
            <div>
              <dl>
                {book?.printType && (
                  <>
                    <dt>Format</dt>
                    <dd>{book?.printType}</dd>
                  </>
                )}

                {book?.pageCount && (
                  <>
                    <dt>Number of pages</dt>
                    <dd>{book?.pageCount}</dd>
                  </>
                )}
              </dl>
            </div>
          </div>

          <div className="book-info">
            {book?.industryIdentifiers?.length && (
              <>
                <h2>ID Numbers</h2>
                <div>
                  <dl>
                    {book?.industryIdentifiers.map((item, index) => {
                      return (
                        <div key={index}>
                          <dt>{item.type}</dt>
                          <dd>{item.identifier}</dd>
                        </div>
                      );
                    })}
                  </dl>
                </div>
              </>
            )}
          </div>
        </div>

        {book?.description && (
          <>
            <h2>Story</h2>
            <p className="book-description">{book?.description}</p>
          </>
        )}
      </div>
    </div>
  );
}

BookPage.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookPage;
