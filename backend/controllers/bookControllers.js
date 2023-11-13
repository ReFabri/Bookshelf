function getBook(req, res) {
  res.send("getBook");
}
function getAllBooks(req, res) {
  res.send("getAllBooks");
}
function createBook(req, res) {
  res.send("createBook");
}
function updateBook(req, res) {
  res.send("updateBook");
}
function deleteBook(req, res) {
  res.send("deleteBook");
}

export { getBook, getAllBooks, createBook, updateBook, deleteBook };
