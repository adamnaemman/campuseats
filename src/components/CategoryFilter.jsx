function CategoryFilter({ categories }) {
  return (
    <div className="category-filter" aria-label="Category filter">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className="category-btn"
          onClick={() => console.log('Selected category:', category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
