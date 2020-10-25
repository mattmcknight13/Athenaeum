import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { getAllBooks, postBook, putBook, destroyBook } from "../services/books";
import { getAllGenres } from "../services/genres";
import Collection from "../screens/Collection/Collection";
import Books from "../screens/Books/Books";
import BookCreate from "../screens/Create/BookCreate";
import BookDetail from "../screens/Detail/BookDetail";
import BookEdit from "../screens/Edit/BookEdit";

export default function MainContainer() {
  const [books, setBooks] = useState([]);
  const [userBooks, setUserBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = await getAllBooks();
      setBooks(booksData);
    };

    const fetchGenres = async () => {
      const genresData = await getAllGenres();
      setGenres(genresData);
    };
    fetchBooks();
    fetchGenres();
  }, []);

  const handleBookCreate = async (bookData) => {
    const newBook = await postBook(bookData);
    setBooks((prevState) => [...prevState, newBook]);
    history.push("/books");
  };

  const handleBookEdit = async (id, bookData) => {
    const updatedBook = await putBook(id, bookData);
    setBooks((prevState) =>
      prevState.map((book) => {
        return book.id === Number(id) ? updatedBook : book;
      })
    );
    history.push(`/books/${id}`);
  };

  const handleBookDelete = async (id) => {
    await destroyBook(id);
    setBooks((prevState) => prevState.filter((book) => book.id !== Number(id)));
    history.push("/books");
  };

 

  return (
    <Switch>
      <Route path="/user/:id/books">
        <Collection setUserBooks={setUserBooks} userBooks={userBooks} />
      </Route>
      <Route path="/books/new">
        <BookCreate handleBookCreate={handleBookCreate} genres={genres} />
      </Route>
      <Route path="/books/:id/edit">
        <BookEdit handleBookEdit={handleBookEdit} books={books} />
      </Route>
      <Route path="/books/:id">
        <BookDetail handleBookDelete={handleBookDelete} />
      </Route>
      <Route path="/books">
        <Books books={books} />
      </Route>
    </Switch>
  );
}
