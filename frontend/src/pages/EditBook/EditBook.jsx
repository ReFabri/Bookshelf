import "./EditBook.css";
import { useState, useEffect } from "react";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:5000/bookstore/");
    };
    fetchData();
  }, []);

  const submitHandler = async () => {
    try {
      if (title && author && publishYear) {
        await fetch("http://localhost:5000/bookstore/", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, author, publishYear }),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="addBook-section">
      <div className="addBook-form">
        <h1>Edit book</h1>

        <label htmlFor="title">Title</label>
        <input
          value={title}
          type="text"
          name="title"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="author">Author</label>
        <input
          value={author}
          type="text"
          name="author"
          id="author"
          onChange={(e) => setAuthor(e.target.value)}
        />

        <label htmlFor="publishYear">Publish Year</label>
        <input
          value={publishYear}
          type="number"
          name="publishYear"
          id="publishYear"
          onChange={(e) => setPublishYear(e.target.value)}
        />

        <button onClick={submitHandler}>Add Book</button>
      </div>
    </section>
  );
};

export default EditBook;
