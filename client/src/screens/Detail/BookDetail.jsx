import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getOneBook } from "../../services/books";
import "./BookDetail.css";

export default function BookDetail(props) {
  const { handleBookDelete } = props;
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      const bookItem = await getOneBook(id);
      setBook(bookItem);
    };
    fetchBook();
  }, [id]);
  return (
    <div className="book-Detail">
      <div className="book-Info">
        {book && (
          <>
            <div>
              <img className="image" src={book.image} alt={book.title} />
            </div>
            <div>
              <div className='info-box'>
                <h1 className="detail-title">{book.title}</h1>
                <h3 className="detail-author"> by {book.author}</h3>
                <h5 className="detail-genre">{book.genre.name}</h5>
              </div>
              <div className="text-box">
                <span className="detail-Description">"{book.description}"</span>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="buttons">
        <button
          onClick={(e) => {
            e.preventDefault();
            handleBookDelete(id);
          }}
        >
          Delete
        </button>
        {book && (
          <Link to={`/books/${book.id}/edit`}>
            <button>Edit</button>
          </Link>
        )}
      </div>
    </div>
  );
}
