function Header({ cartCount, cartTotal }) {
  return (
    <header className="header">
      <h1 className="logo">CampusEats</h1>
      <nav className="nav">
        <a href="#">Vendors</a>
        <a href="#">My Orders</a>
        <a href="#" className="cart">
          Cart <span className="badge">{cartCount}</span>
          {cartTotal !== undefined && cartTotal > 0 ? ` · RM ${cartTotal.toFixed(2)}` : ''}
        </a>
      </nav>
    </header>
  )
}

export default Header