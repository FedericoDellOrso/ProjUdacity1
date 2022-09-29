import Book from "./Book";

function Bookshelf({ booksInShelf, shelfTitle, onUpdateBookShelf }) {
  const shelfNameList = {
    currentlyReading: "Currently Reading",
    wantToRead: "Want To Read",
    read: "Read",
  };

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfNameList[shelfTitle]}</h2>
      <div className="bookshelf-books"></div>
      <ol className="books-grid">
        {booksInShelf.map(
          (book) =>
            shelfTitle === book.shelf && (
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

export default Bookshelf;
