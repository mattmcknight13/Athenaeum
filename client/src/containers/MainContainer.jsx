import React, { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { getAllBooks, postBook, putBook } from '../services/books'
import Books from '../screens/Books'
import BookCreate from '../screens/BookCreate'
import BookDetail from '../screens/Detail/BookDetail'
import BookEdit from '../screens/BookEdit'

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
    history.push('/books')
  }

  const handleBookEdit = async (id, bookData) => {
    const updatedBook = await putBook(id, bookData);
    setBooks(prevState => prevState.map(book => {
      return book.id === Number(id) ? updatedBook : book
    }))
    history.push(`/books/${id}`)
  }

  return (
    <Switch>
      <Route path='/books/new'>
        <BookCreate
          handleBookCreate={handleBookCreate}
        />
      </Route>
      <Route path='/books/:id/edit'>
        <BookEdit
          handleBookEdit={handleBookEdit}
          books={books}
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
