import { Router } from "express";
import {
  getBook,
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/bookControllers.js";

const bookRoutes = Router();

bookRoutes.get("/:id", getBook);
bookRoutes.get("/", getAllBooks);
bookRoutes.post("/", createBook);
bookRoutes.put("/:id", updateBook);
bookRoutes.delete("/:id", deleteBook);

export default bookRoutes;
