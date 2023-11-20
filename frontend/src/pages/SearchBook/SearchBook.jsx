import { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./SearchBook.css";

const SearchBook = () => {
  const navigate = useNavigate();
  const { query } = useParams();
  const [allBooks, setAllBooks] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const data = await fetch("http://localhost:5000/bookstore/");
      const jsonData = await data.json();
      const cleanQueryStr = query.trim().toLowerCase();
      const foundBooks = jsonData.books.filter((book) => {
        return book.title.toLowerCase().includes(cleanQueryStr);
      });
      setAllBooks(foundBooks);
    } catch (error) {
      console.log(error);
    }
  }, [query]);

  useEffect(() => {
    fetchData();
  }, [fetchData, setAllBooks]);

  const editHandler = (e) => {
    e.preventDefault();
    navigate(`/editbook/${e.target.value}`);
  };

  const deleteHandler = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5000/bookstore/${e.target.value}`, {
      method: "DELETE",
    });
    fetchData();
  };

  return (
    <section className="allBooks-section">
      <div className="allBooks-container">
        <h1>All your books</h1>
        {!allBooks.length ? (
          <div>
            <h2>No Books Found</h2>
            <p>📕 Your search returned no results</p>
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
                <button onClick={editHandler} value={book._id}>
                  ✏️
                </button>
                <button onClick={deleteHandler} value={book._id}>
                  🗑️
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default SearchBook;
