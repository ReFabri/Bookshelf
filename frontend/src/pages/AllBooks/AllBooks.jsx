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
    <section>
      <h1>All your books</h1>
      {!allBooks.length ? (
        <h2>No Books in your List</h2>
      ) : (
        allBooks.map((book) => (
          <p key={book.id}>
            {book.title} by {book.author}, year: {book.publishYear}
          </p>
        ))
      )}
    </section>
  );
};

export default AllBooks;
