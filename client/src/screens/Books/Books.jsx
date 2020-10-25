import React from 'react'
import './Books.css'
import { Link } from 'react-router-dom'

export default function Books(props) {
  const { books } = props
  return (
    <div className='books'>
      <div className='page title'>
        </div>
      <div className='create'>
        <Link to='/books/new'><button>Create</button></Link>
        </div>
      <div>
      <div className='collection'>
      {
        books.map(book => (
          <div key={book.id}>
            <div>
              <Link to={`/books/${book.id}`}><img className='img' src={book.image} alt={book.title} /></Link>
              </div>
          </div>
        ))
        }
        </div>
        </div>
    </div>
  )
}
