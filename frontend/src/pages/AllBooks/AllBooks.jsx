import { useState, useEffect } from "react";

import "./AllBooks.css";

const editHandler = () => {};

const deleteHandler = () => {};

const AllBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("http://localhost:5000/bookstore/");
        const jsonData = await data.json();
        setAllBooks(jsonData.books);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [setAllBooks]);

  return (
    <section className="allBooks-section">
      <div className="allBooks-container">
        <h1>All your books</h1>
        {!allBooks.length ? (
          <div>
            <h2>No Books in your List</h2>
            <p>📕 Add books to your list at the top navigation bar</p>
          </div>
        ) : (
          allBooks.map((book) => (
            <div key={book._id} className="allBooks-index">
              <div>
                <span>{book.title}</span>
              </div>
              <div>
                <span>{book.author}</span>
              </div>
              <div className="allBooks-year">
                Year: <span>{book.publishYear}</span>
              </div>
              <div className="allBooks-btns">
                <button onClick={editHandler}>✏️</button>
                <button onClick={deleteHandler}>🗑️</button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default AllBooks;
