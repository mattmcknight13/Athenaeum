import React, { useEffect} from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { getUserBooks } from '../services/books'

export default function Collection(props) {
  const { userBooks, setUserBooks } = props
  const { id } = useParams()

  useEffect(() => {
    const fetchUserBooks = async (id) => {
      const userBooks = await getUserBooks(id)
      setUserBooks(userBooks)
    }
    fetchUserBooks(id)
  },[])

  console.log(userBooks)

  return (
    <div>
      <h1>User</h1>
      {
        userBooks &&
        userBooks.map(book => (
          <tr key={book.id}>
            <td>
              <Link to={`/books/${book.id}`}><img className='img' src={book.image} alt={book.title} /></Link>
              </td>
          </tr>
        ))
        }
    </div>
  )
}
