import React, { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { getAllBooks, postBook } from '../services/books'
import Books from '../screens/Books'
import BookCreate from '../screens/BookCreate'
import BookDetail from '../screens/BookDetail'

export default function MainContainer() {
  const [books, setBooks] = useState([])
  const history = useHistory()

  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = await getAllBooks();
      setBooks(booksData);
    }
    fetchBooks()
  }, [])
  
  const handleBookCreate = async (bookData) => {
    const newBook = await postBook(bookData);
    setBooks(prevState => ([...prevState, newBook]));
    history.push('/books/new')
  }

  return (
    <Switch>
      <Route path='/books/new'>
        <BookCreate
          handleBookCreate={handleBookCreate}
        />
      </Route>
      <Route path='/books/:id'>
        <BookDetail />
      </Route>
      <Route path="/books">
        <Books books={books}/>
      </Route>
      
    </Switch>
  )
}
