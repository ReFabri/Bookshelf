import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="headerMain">
      <div>
        <Link to="/" className="title">
          BookShelf
        </Link>
      </div>
      <div>
        <input type="text" name="" id="" placeholder="Search for a book" />
      </div>
      <nav className="navMain">
        <button>Add Book</button>
        <button>All Books</button>
      </nav>
    </header>
  );
};

export default Header;
