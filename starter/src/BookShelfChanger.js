
function BookShelfChanger({ bookShelf, onShelfChange }) {
  const shelfOfBook = ["currentlyReading", "wantToRead", "read", "none"];
  const shelfNames = {
    currentlyReading: "Currently Reading",
    wantToRead: "Want To Read",
    read: "Read",
    none: "None",
  };

  const handleSelect = (event) => {
    event.preventDefault();
    onShelfChange(event.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select onChange={handleSelect} value={bookShelf}>
        <option value="header" disabled>
          Move to...
        </option>
        {shelfOfBook.map((shelf) => (
          <option key={shelf} value={shelf}>
            {shelfNames[shelf]}
          </option>
        ))}
      </select>
    </div>
  );
}

export default BookShelfChanger;
