// function MenuItemCard() {
//     // 1. Declare item as object with attributes name, description, price, and available
//     const item = {
//         name: "Small Chicken",
//         description: "Chicken",
//         price: "7.5",
//         available: true,
//     }

//     return (
//         <div className="menu-item-card">
//             <div className="menu-item-info">
//                 <h4 className="item-name">{item.name}</h4>
//                 <p className="item-description">{item.description}</p>

//                 /* 2. Price RM7.50 */
//                 <p className="item-price">RM {item.price.toFixed(2)}</p>

//             </div>
//             <button className="btn" disabled={!item.available}>
//                     {item.available ? "Add to cart" : "Sold out"}
//             </button>
//         </div>
//     )
// }

function MenuItemCard() {
  const item = {
    name: 'Nasi Lemak Ayam',
    description: 'Coconut rice, fried chicken, sambal, egg and peanuts',
    price: 7.5,
    available: true,
  }
 
  return (
    <article className="card menu-card">
      <div className="thumb" aria-hidden="true">{item.name.charAt(0)}</div>
      <h3>{item.name}</h3>
      <p className="muted">{item.description}</p>
      <p className="price">RM {item.price.toFixed(2)}</p>
      <button className="btn" disabled={!item.available}>
        {item.available ? 'Add to cart' : 'Sold out'}
      </button>
    </article>
  )
}
 
export default MenuItemCard