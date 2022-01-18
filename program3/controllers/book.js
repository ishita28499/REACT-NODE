const Book = require('../models/book');

const createBook = async (req, res, next) => {
  const book = req.body;

  const newBook = new Book({
    ISBN: book.ISBN,
    name: book.name,
    price: book.price,
    isInStock: book.isInStock,
    edition: book.edition,
    printDate: book.printDate,
  });

  try {
    await newBook.save();
  } catch(err) {
    console.log(err);
    return res.send('Error occurred while saving the book');
  }

  res.json({ book: newBook });
};

const getListBooks = async (req, res, next) => {
  let books;

  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
    return res.send('Error occurred while fetching the books');
  }

  res.json({ books: books });
};

const getBookByISBN = async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res.send('Please pass id');
  }

  let book;

  try {
    book = await Book.find({ ISBN: id });
  } catch (err) {
    console.log(err);
    return res.send('Error occurred while fetching the book');
  }

  res.json({ book: book });
};

const updateBookByISBN = async (req, res, next) => {
  const { id } = req.params;

  const book = req.body;

  if (!id) {
    return res.send('Please pass id');
  }

  let updatedBook;

  const newBook = {
    name: book.name,
    price: book.price,
    isInStock: book.isInStock,
    edition: book.edition,
    printDate: book.printDate,
  };

  try {
    updatedBook = await Book.findOneAndUpdate({ ISBN: id }, newBook, { new: true });
  } catch (err) {
    console.log(err);
    return res.send('Error occurred while updating the book');
  }

  res.json({ book: updatedBook });
};

const deleteBookByISBN = async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res.send('Please pass id');
  }

  try {
    await Book.findOneAndDelete({ ISBN: id });
  } catch(err) {
    console.log(err);
    return res.send('Error occurred while deleting the book');
  }

  res.json({ message: 'Book deleted successfully' });
};

module.exports = { createBook, getListBooks, getBookByISBN, updateBookByISBN, deleteBookByISBN };
