import { MongooseError } from "mongoose";
import { Book } from "../models/bookModel.js";

async function getBook(req, res) {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (book) {
      return res
        .status(200)
        .json({ message: "Successfully received book", book });
    } else {
      return res.status(400).json({ message: "Incorrect Book id" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "GET book request failed" });
  }
}

async function getAllBooks(req, res) {
  try {
    const books = await Book.find({});
    return res
      .status(200)
      .json({ message: "Successfully received all books", books });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "GET all books request failed", error });
  }
}

async function createBook(req, res) {
  try {
    const { title, author, publishYear } = req.body;
    const existingBook = await Book.findOne({ title });
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
    console.log(error);
    return res.status(500).json({ message: "Book creation failed", error });
  }
}
async function updateBook(req, res) {
  try {
    const { id } = req.params;
    const { title, author, publishYear } = req.body;
    const bookToEdit = await Book.findById(id);
    if (bookToEdit) {
      bookToEdit.title = title?.trim() ? title : bookToEdit.title;
      bookToEdit.author = author?.trim() ? author : bookToEdit.author;
      bookToEdit.publishYear = publishYear
        ? publishYear
        : bookToEdit.publishYear;
      await bookToEdit.save();
      res.status(200).json({ message: "Book successfully updated" });
    } else {
      res.status(400).json({ message: "Incorrect Book id" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Book update failed", error });
  }
}

async function deleteBook(req, res) {
  try {
    const { id } = req.params;
    const foundBook = await Book.findById(id);
    if (foundBook) {
      await Book.findByIdAndDelete(id);
      return res.status(200).json({ message: "Book removed from database" });
    } else {
      res.status(400).json({ message: "Incorrect Book id" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Book deletion error", error });
  }
}

export { getBook, getAllBooks, createBook, updateBook, deleteBook };
