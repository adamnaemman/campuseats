import { useState } from 'react'
import vendors from './data/vendors.js'
import Header from './components/Header.jsx'
import VendorCard from './components/VendorCard.jsx'
import CategoryFilter from './components/CategoryFilter.jsx'
import MenuList from './components/MenuList.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [selectedVendorId, setSelectedVendorId] = useState(vendors[0].id)
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')

  const selectedVendor = vendors.find((v) => v.id === selectedVendorId) || vendors[0]

  function handleAddToCart(item) {
    setCart((prevCart) => [...prevCart, item]) // a NEW array, never cart.push()
  }

  // Personal feature (Digit 1: Filter by category)
  // Build categories list from active vendor's menu data
  const categories = ['All', ...new Set((selectedVendor.menu || []).map((item) => item.category))]

  // Filter menu items based on selected category (or show all if 'All' is selected)
  const displayedMenu = selectedCategory === 'All'
    ? (selectedVendor.menu || [])
    : (selectedVendor.menu || []).filter((item) => item.category === selectedCategory)

  // Stretch task (optional): cart total using reduce without extra state
  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <>
      <Header cartCount={cart.length} cartTotal={cartTotal} />
      <main className="container">
        <section>
          <h2 className="section-title">Choose a vendor</h2>
          <div className="vendor-grid">
            {vendors.map((vendor) => (
              <VendorCard
                key={vendor.id}
                vendor={vendor}
                isSelected={vendor.id === selectedVendorId}
                onSelect={(id) => {
                  setSelectedVendorId(id)
                  setSelectedCategory('All')
                }}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="section-title">Menu: {selectedVendor.name}</h2>
          {/* Personal feature (Digit 1: Filter by category) */}
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          <MenuList items={displayedMenu} onAdd={handleAddToCart} />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App