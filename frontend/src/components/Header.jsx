import "./Header.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleQuery = (e) => {
    e.preventDefault();
    if (query.length) navigate(`/searchbook/${query}`);
  };

  return (
    <header className="headerMain">
      <div>
        <Link to="/" className="headerTitle">
          📙 BookShelf
        </Link>
      </div>
      <div className="headerSearch">
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="text"
          placeholder="Search for a book"
        />
        <button
          className="headerBtn headerBtn-search"
          onClick={handleQuery}
          value={query.trim()}
        >
          🔍
        </button>
      </div>
      <nav className="navMain">
        <Link to="/addbook">
          <button className="headerBtn">Add Book</button>
        </Link>
        <Link to="/allbooks">
          <button className="headerBtn">All Books</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
