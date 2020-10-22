import React, { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { getAllBooks, postBook, putBook, destroyBook } from '../services/books'
import { getAllGenres } from '../services/genres'
import Books from '../screens/Books/Books'
import BookCreate from '../screens/BookCreate'
import BookDetail from '../screens/Detail/BookDetail'
import BookEdit from '../screens/BookEdit'

export default function MainContainer() {
  const [books, setBooks] = useState([])
  const [genres, setGenres] = useState([])
  const history = useHistory()

  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = await getAllBooks();
      setBooks(booksData);
    }
    const fetchGenres = async () => {
      const genresData = await getAllGenres()
      setGenres(genresData)
    }
    fetchBooks()
    fetchGenres()
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

  const handleBookDelete = async (id) => {
    await destroyBook(id)
    setBooks(prevState => prevState.filter(book => book.id !== id))
    history.push('/books')
    window.location.reload('/books')
  }

  return (
    <Switch>
      <Route path='/books/new'>
        <BookCreate
          handleBookCreate={handleBookCreate}
          genres = {genres}
        />
      </Route>
      <Route path='/books/:id/edit'>
        <BookEdit
          handleBookEdit={handleBookEdit} 
        />
        </Route>
      <Route path='/books/:id'>
        <BookDetail
          handleBookDelete={handleBookDelete}
        />
      </Route>
      <Route path="/books">
        <Books books={books}/>
      </Route>
    </Switch>
  )
}
