function MenuItemCard() {
    // 1. Declare item as object with attributes name, description, price, and available
    const item = {
        name: "Small Chicken",
        description: "Chicken",
        price: "7.5",
        available: true,
    }

    return (
        <div className="menu-item-card">
            <div className="menu-item-info">
                <h4 className="item-name">{item.name}</h4>
                <p className="item-description">{item.description}</p>

                /* 2. Price RM7.50 */
                <p className="item-price">RM {item.price.toFixed(2)}</p>

            </div>
            <button className="btn" disabled={!item.available}>
                    {item.available ? "Add to cart" : "Sold out"}
            </button>
        </div>
    )
}