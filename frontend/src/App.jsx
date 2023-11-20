import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import AddBook from "./pages/AddBook/AddBook";
import AllBooks from "./pages/AllBooks/AllBooks";
import EditBook from "./pages/EditBook/EditBook";
import SearchBook from "./pages/SearchBook/SearchBook";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/allbooks" element={<AllBooks />} />
        <Route path="/editbook/:id" element={<EditBook />} />
        <Route path="/searchbook/:search" element={<SearchBook />} />
      </Routes>
    </>
  );
}

export default App;
