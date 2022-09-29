import BookShelfChanger from "./BookShelfChanger";
import * as BAPI from "./BooksAPI"

function Book({ book, onUpdateBookShelf }) {
  const onShelfChange = (shelf) => {
    BAPI.update(book, shelf).then((res) => console.log(res));
    onUpdateBookShelf(book, shelf);
    //console.log("IDBook",book.title)
  };
  if(!book.shelf){book.shelf="none"}
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.thumbnail})`,
          }}
        ></div>
        <BookShelfChanger
          bookShelf={book.shelf}
          onShelfChange={onShelfChange}
        />
      </div>
      <div className="book-title">{book.title}</div>
      {book.authors &&
        book.authors.map((author) => (
          <div className="book-authors" key={author}>
            {author}
          </div>
        ))}
    </div>
  );
}

export default Book;
