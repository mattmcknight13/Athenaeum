import React from 'react'
import { Link } from 'react-router-dom'

export default function Books(props) {
  const { books } = props
  return (
    <div>
      <h3>Books</h3>
      <Link to='/books/'><button>Create</button></Link>
      {
        books.map(book => (
          <div key={book.id}>
            <Link to={`/books/${book.id}`}><img src={book.image} alt={book.title}/></Link>

          </div>
        ))
      }
      
    </div>
  )
}
