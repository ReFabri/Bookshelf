import "./Home.css";

const Home = () => {
  return (
    <section className="homeSection">
      <div className="homeImage">
        <img src="bookshelf.png" alt="bookshelf" />
      </div>
      <div className="homeText-container">
        <h1>Welcome to your BookShelf</h1>
        <p>
          Choose to add a new book, look for a specific book or list all your
          books by clicking the buttons on the top navigation bar.
        </p>
      </div>
    </section>
  );
};

export default Home;
