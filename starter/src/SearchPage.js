import SearchBookResult from "./SearchBookResult";
import SearchInput from "./SearchInput";
import { useState, useEffect } from "react";
import * as BAPI from "./BooksAPI"
import { Link } from "react-router-dom";

function SearchPage({ onUpdateBookShelf, booksInShelf }) {
  const [inputText, setInputText] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);
  //const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (inputText !== "") {
      BAPI.search(inputText)
        .then((books) => {
          setSearchedBooks(books);
        })
        .catch((err) => {
          console.log("ERROR");
          console.log(err);
          setSearchedBooks([]);
        });
    } else {
      setSearchedBooks([]);
    }
    // console.log(inputText);
    // console.log(searchedBooks);
  }, [inputText]);

//   useEffect(() => {
//     if (searchedBooks.error) {
//       console.log("CHECK");
//       console.log(searchedBooks);
//       setShowResult(false);
//     } else {
//       console.log("CHECKELSE");
//       console.log(searchedBooks);
//       setShowResult(true);
//     }
//   }, [searchedBooks]);

  const handleInputText = (text) => {
    setInputText(text);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <SearchInput textTyped={inputText} handleInputText={handleInputText} />
      </div>
      {!searchedBooks.error && (
        <SearchBookResult
          searchedBooks={searchedBooks}
          onUpdateBookShelf={onUpdateBookShelf}
          booksInShelf={booksInShelf}
        />
      )}
    </div>
  );
}

export default SearchPage;
