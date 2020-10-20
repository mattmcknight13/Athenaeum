import React, { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { getAllBooks, postBook } from '../services/books'
import { getAllGenres } from '../services/genres'
import Books from '../screens/Books'
import BookCreate from '../screens/BookCreate'

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
      const genresData = await getAllGenres();
      setGenres(genresData);
    }
    fetchBooks()
    fetchGenres()
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
      <Route path="/books">
        <Books books={books}/>
      </Route>
      
    </Switch>
  )
}
