function Header() {
    const name = "CampusEats"
    const cartCount = 0 

    return (
        <header className="header">
            <h1 className="logo">{name}</h1>
            <nav className="nav">
                <ul>
                    <li><a href="#">Vendors</a></li>
                    <li><a href="#">My Orders</a></li>
                    <li><a href="#">Cart</a><span className="badge">{cartCount}</span></li>
                </ul>
            </nav>
        </header>
    )
}