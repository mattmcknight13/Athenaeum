import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOneBook } from '../services/books'

export default function BookDetail(props) {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      const bookItem = await getOneBook(id);
      setBook(bookItem);
    }
    fetchBook();
  }, [id])
  return (
    <div>
      {
        book &&
        <>
          <img src={book.image} alt={book.title} />
          <h1>{book.title}</h1>
          <h3>{book.author}</h3>
          <h5>{book.genre.name}</h5>
          <h5>{book.description}</h5>
        </>
      }
      
    </div>
  )
}
