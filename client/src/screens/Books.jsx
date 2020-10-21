import React from 'react'
import './Books.css'
import { Link } from 'react-router-dom'

export default function Books(props) {
  const { books } = props
  return (
    <div className='books'>
      <div className=''>
        <h3>Books</h3>
      </div>
      <div>
        <Link to='/books/new'><button>Create</button></Link>
      </div>
      <div className='collection'>
      {
        books.map(book => (
          <div key={book.id}>
            <Link to={`/books/${book.id}`}><img className='img' src={book.image} alt={book.title}/></Link>

          </div>
        ))
        }
      </div>
      
    </div>
  )
}
