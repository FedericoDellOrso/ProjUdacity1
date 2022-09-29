import Bookshelf from "./Bookshelf";
import { Link } from "react-router-dom";

function ListBooks({ shelfList, booksInShelf, onUpdateBookShelf }) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelfList.map((nameShelf) => (
            <Bookshelf
              booksInShelf={booksInShelf}
              shelfTitle={nameShelf}
              onUpdateBookShelf={onUpdateBookShelf}
              key={nameShelf}
            />
          ))}
        </div>
      </div>
    <div className="open-search">
        <Link to="search">Add</Link>
      </div>
    </div>
  );
}

export default ListBooks;
