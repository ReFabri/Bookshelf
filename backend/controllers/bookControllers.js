import { Book } from "../models/bookModel.js";

async function getBook(req, res) {
  res.send("getBook");
}

async function getAllBooks(req, res) {
  try {
    const books = await Book.find({});
    return res
      .status(200)
      .json({ message: "Successfully received all books", books });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "GET all books request failed", error });
  }
}

async function createBook(req, res) {
  try {
    const { title, author, publishYear } = req.body;
    const existingBook = await Book.find({ title });
    if (!existingBook) {
      const book = new Book({ title, author, publishYear });
      await book.save();
      return res
        .status(201)
        .json({ message: "Book successfully created", book });
    } else {
      return res.status(409).json({ message: "Book title already exists" });
    }
  } catch (error) {
    return res.status(200).json({ message: "Book creation failed", error });
  }
}
async function updateBook(req, res) {
  res.send("updateBook");
}
async function deleteBook(req, res) {
  res.send("deleteBook");
}

export { getBook, getAllBooks, createBook, updateBook, deleteBook };
