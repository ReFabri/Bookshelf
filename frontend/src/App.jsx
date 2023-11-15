import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import AllBooks from "./pages/AllBooks";
import EditBook from "./pages/EditBook";

function App() {
  return (
    <Routes>
      <Route path="/" element={Home} />
      <Route path="/addbook" element={AddBook} />
      <Route path="/allbooks" element={AllBooks} />
      <Route path="/editbook" element={EditBook} />
    </Routes>
  );
}

export default App;
