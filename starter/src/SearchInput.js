function SearchInput  ({textTyped,handleInputText})  {

    const updateText = (e) => {
        handleInputText(e.target.value)
       
    }
    return (
            <div className="search-books-input-wrapper">
              <input 
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={textTyped}
                onChange={updateText}
              />
            </div>
    )
} 

export default SearchInput