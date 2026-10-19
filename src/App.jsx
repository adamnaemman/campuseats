import { useState } from 'react'
import vendors from './data/vendors.js'
import Header from './components/Header.jsx'
import VendorCard from './components/VendorCard.jsx'
import SearchBar from './components/SearchBar.jsx'
import MenuList from './components/MenuList.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [selectedVendorId, setSelectedVendorId] = useState(vendors[0].id)
  const [cart, setCart] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const selectedVendor = vendors.find((v) => v.id === selectedVendorId) || vendors[0]

  function handleAddToCart(item) {
    setCart((prevCart) => [...prevCart, item]) // a NEW array, never cart.push()
  }

  // Filter menu items by name based on search query
  const filteredMenu = (selectedVendor.menu || []).filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
                  setSearchQuery('')
                }}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="section-title">Menu: {selectedVendor.name}</h2>
          {/* Personal feature (Digit 0): Search menu by name */}
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <MenuList items={filteredMenu} onAdd={handleAddToCart} />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App