/* TODO - add your code to create a functional React component that displays all of the available books 
in the library's catalog. Fetch the book data from the provided API. 
Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// const BASE_URL = `https://unit3-bookbuddy-api-6ea9.onrender.com/api/`;

function Books({ token, setToken }) {
  const [books, setBooks] = useState([]);
  // const [booksToShow, setBooksToShow] = useState([]);
  useEffect(() => {
    axios(`${import.meta.env.VITE_BOOK_BUDDY_API}/books`)
      .then((data) => {
        // console.log(data.data.books);
        setBooks(data.data.books);
        // setBooksToShow(data.data.books);
      })
      .catch((err) => console.log(err));
  }, []);

  // const bookSearch = (e) => {
  //   console.log(e.target.value);
  //   const searchResults = books.filter((book) =>
  //     book.title.toLowerCase().includes(e.target.value.toLowerCase())
  //   );
  //   setBooks(searchResults);
  //   console.log(searchResults);
  //   // console.log(books); LOG SUCCESS
  // };

  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   setToken(null);
  // };

  return (
    <div>
      {/* Move this to Navigation */}
      {/* {token ? (
        <>
          <Link to="/account">Your Account</Link>
          <button onClick={handleLogout}>Log Out</button>
        </>
      ) : (
        <>
          <Login />
          <p>New here?</p>
          <Link to="/register">Sign Up</Link>
        </>
      )} */}
      <h2>Library Offerings</h2>
      {/* <label>
        Search by title:
        <input type="text" onChange={bookSearch} />
      </label> */}
      <div className="book-list">
        {books.map((book) => (
          <div key={book?.id}>
            <h1>{book?.title}</h1>
          </div>
          // See details button
        ))}
      </div>
    </div>
  );
}

export default Books;
