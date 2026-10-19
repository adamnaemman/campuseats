function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search menu by name..."
        aria-label="Search menu by name"
      />
    </div>
  )
}

export default SearchBar
