import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="headerMain">
      <div>
        <Link to="/" className="headerTitle">
          BookShelf
        </Link>
      </div>
      <div className="headerSearch">
        <input type="text" name="" id="" placeholder="Search for a book" />
        <button className="headerBtn headerBtn-search">🔍</button>
      </div>
      <nav className="navMain">
        <button className="headerBtn">Add Book</button>
        <button className="headerBtn">All Books</button>
      </nav>
    </header>
  );
};

export default Header;
