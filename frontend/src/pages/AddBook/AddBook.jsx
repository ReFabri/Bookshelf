import "./AddBook.css";

const AddBook = () => {
  return (
    <section className="addBook-section">
      <div className="addBook-form">
        <h1>Add a new book</h1>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        <label htmlFor="author">Author</label>
        <input type="text" name="author" id="author" />
        <label htmlFor="publishYear">Publish Year</label>
        <input type="number" name="publishYear" id="publishYear" />
        <button>Add Book</button>
      </div>
    </section>
  );
};

export default AddBook;
