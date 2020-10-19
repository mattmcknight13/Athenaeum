# PROJECT 4 README <!-- omit in toc -->

## Overview

# Athenaeum

Is the beginnings of a online personal library index system, you will be able to catalog your books by adding descritptions and images of them, which will allow you to personally keep track of what you do and don't have and be able to share with others so you can lend to your friends.

<br>

## MVP

<br>

### Goals

- allow for seperation of peoples libraries by having login
- easily be able to add, update, or remove books from your personal library
- clearly view all books within library or bring up specific details about a book
- be able to apply genre tags for future plans
  <br>

### Libraries and Dependencies

|   Library    | Description                                |
| :----------: | :----------------------------------------- |
|    React     | Front-end user interface                   |
| React Router | allows to link between pages               |
|    Axios     | Api Calls to back end                      |
|  Ruby/rails  | Backend language and database manipulation |
|   Flexbox    | CSS styling for font-end                   |

<br>

### Client (Front End)

#### Wireframes

![wireframe](https://imgur.com/IIjmSKy.png)

#### Component Tree

![whimsical](https://imgur.com/oEn1nba.png)

#### Component Hierarchy

```structure

src
|__ assets/
      |__ fonts
|__ components/
    |__App.js
      |__ Header.jsx
      |__ Main.jsx
          |__ Register.jsx
          |__ Login.jsx
          |__ Books.jsx
          |__ Book.jsx
              |__ DeleteBook.jsx
          |__ AddBook.jsx
          |__ EditBook.jsx
       |__ services/
       |__ utils
          |__ api-config


```

#### Component Breakdown

| Component  |    Type    | state | props | Description                                                                                                                               |
| :--------: | :--------: | :---: | :---: | :---------------------------------------------------------------------------------------------------------------------------------------- |
|   Header   | functional |   y   |   y   | the header will be a shared element that will contain site name and login/registerlogout functionality                                    |
|    main    | functional |   n   |   n   | _The navigation will provide a link to each of the pages._                                                                                |
|    App     | functional |   n   |   n   | will be render spot and home of header                                                                                                    |
|   Books    | functional |   n   |   y   | will be User default page on sign in and will display all books currently in their library, and connection point for creating a new book. |
|    Book    | functional |   n   |   n   | will be a Book detail paage where you can jump to edit or delete of a specific book                                                       |
| BookDelete | functional |   y   |   y   | will what deletes specfic book from user library                                                                                          |
|  BookEdit  | functional |   y   |   n   | form to update book information                                                                                                           |
|  BookAdd   | functional |   y   |   y   | form to add a new book to database/user library                                                                                           |
|   Login    | functional |   y   |   y   | will send infomration back to verify account exists and show user information                                                             |
|  Register  | functional |   y   |   n   | form to create a new user and initialize a empty library                                                                                  |

#### Time Estimates

| Task                     | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------ | :------: | :------------: | :-----------: | :---------: |
| begin Backend            |    H     |     3 hrs      |               |             |
| create crud actions      |    H     |     3 hrs      |               |             |
| Schema                   |    H     |      2hrs      |               |             |
| tables                   |    m     |      2hrs      |               |             |
| Test backend             |    l     |      1hrs      |               |             |
| begin front end skeleton |    H     |      3hrs      |               |             |
| api config and test      |    H     |      2hrs      |               |             |
| begiin indiviudal pages  |    H     |      9hrs      |               |             |
| css                      |    m     |      5hrs      |               |             |
| TOTAL                    |          |     36 hrs     |               |             |

<br>

### Server (Back End)

#### ERD Model

![ERD](https://imgur.com/RMQ0XBU.png)

<br>

---

## Post-MVP

- Sort by genre
- make sure multiple books of same name are not added to database
- reccomnded reading based on genre
- review section
- search to look if a book is already in system
- to add a status function, if you are reading a book, have read the book, if it is lent out to someone. maybe even how you own it digital, audio, physical

---

## Code Showcase

## Code Issues & Resolutions
