const express = require('express');

const { createBook, getListBooks, getBookByISBN, updateBookByISBN, deleteBookByISBN } = require('../controllers/book');

const router = express.Router();

router.post('/', createBook);
router.get('/', getListBooks);
router.get('/:id', getBookByISBN);
router.put('/:id', updateBookByISBN);
router.delete('/:id', deleteBookByISBN);

module.exports = router;
