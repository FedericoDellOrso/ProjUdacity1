import Book from "./Book";
import PropTypes from "prop-types";

function SearchBookResult({ searchedBooks, onUpdateBookShelf, booksInShelf }) {
  searchedBooks.map((bookSearched) => {
    booksInShelf.map((bookShelf) => {
      if (bookSearched.id === bookShelf.id) {
        bookSearched.shelf = bookShelf.shelf;
      }
      return bookShelf
    });
    return bookSearched
  });
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {searchedBooks.map(
          (book) =>
            book.imageLinks && (
              <Book
                book={book}
                onUpdateBookShelf={onUpdateBookShelf}
                key={book.id}
              />
            )
        )}
      </ol>
    </div>
  );
}

SearchBookResult.propTypes = {
  searchedBooks: PropTypes.array.isRequired,
};

export default SearchBookResult;
