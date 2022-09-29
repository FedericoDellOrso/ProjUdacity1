import "./App.css";
import * as BAPI from "./BooksAPI"
import { useState, useEffect } from "react";
import ListBooks from "./ListBooks";
import SearchPage from "./SearchPage";
import { Route, Routes } from "react-router-dom";

function App() {
  const shelfList = ["currentlyReading", "wantToRead", "read"];
  const [booksAll, setBooksAll] = useState([]);

  useEffect(() => {
    BAPI.getAll()
      .then((books) => {
        setBooksAll(books);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const updateBook = (bookUpdate, newShelf) => {
    let bookinState = false;
    let updatedBookList = booksAll.map((book) => {
      if (book.id === bookUpdate.id) {
        bookinState=true;
        book.shelf = newShelf;
      }
      return book;
    });
    console.log("update",newShelf)
    if (bookUpdate.shelf==="none" && !bookinState){
      bookUpdate.shelf=newShelf;
      updatedBookList = [...updatedBookList,bookUpdate]
    }
    setBooksAll(updatedBookList);
  };

  console.log(booksAll);
  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ListBooks
              shelfList={shelfList}
              booksInShelf={booksAll}
              onUpdateBookShelf={updateBook}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchPage
              onUpdateBookShelf={updateBook}
              booksInShelf={booksAll}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
