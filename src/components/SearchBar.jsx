function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search menu by name..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search menu by name"
      />
    </div>
  )
}

export default SearchBar
