import React, { useEffect} from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { getUserBooks } from '../../services/books'
import './Collection.css'

export default function Collection(props) {
  const { userBooks, setUserBooks } = props
  const { id } = useParams()

  useEffect(() => {
    const fetchUserBooks = async (id) => {
      const userBooks = await getUserBooks(id)
      setUserBooks(userBooks)
    }
    fetchUserBooks(id)
  },[setUserBooks,id])



  return (
    <div className='my-collection-page'>
    <div className='my-collection'>
      {
        userBooks &&
        userBooks.map(book => (
          <div key={book.id}>
            <div>
              <Link to={`/books/${book.id}`}><img className='img' src={book.image} alt={book.title} /></Link>
              </div>
          </div>
        ))
        }
      </div>
      </div>
  )
}
