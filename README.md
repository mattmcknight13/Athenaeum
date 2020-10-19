# PROJECT 4 README <!-- omit in toc -->

> The Project Planning section **should be completed** for your project pitch with instructors.
>
> To ensure correct Markdown, copy and paste the raw template code into your project repo README file. Remove ALL template instructions and replace with your project details.

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

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

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

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

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like.

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

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

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

> Use this section to estimate the time necessary to build out each of the components you've described above.

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

---

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
