import "./AllBooks.css";

const AllBooks = () => {
  const allBooks = [
    {
      id: 1,
      title: "Super Amazing Book",
      author: "Mister Amazing Author",
      publishYear: 1234,
    },
    {
      id: 2,
      title: "Sci-Fi Nerdfest",
      author: "Annoying Arrogant Nerd",
      publishYear: 1234,
    },
    {
      id: 3,
      title: "Fantasy and Dragons",
      author: "Adult Man-Child",
      publishYear: 1234,
    },
  ];

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
            <div key={book.id} className="allBooks-index">
              <div>
                <span>{book.title}</span>
              </div>
              <div>
                <span>{book.author}</span>
              </div>
              <div className="allBooks-year">
                Year: <span>{book.publishYear}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default AllBooks;
