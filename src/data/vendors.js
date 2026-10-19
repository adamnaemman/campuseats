const vendors = [
  {
    id: 'my-restaurant',
    name: 'Kek Tapak Kuda',
    location: 'Mahallah Ali / Gombak, Selangor',
    openHours: '7:30 am - 7:00 pm',
    isOpen: true,
    menu: [
      { id: 'ktk-1', name: 'Matcha Roll', description: 'Made with original Japanese matcha ganache', price: 28.00, category: 'Cake', available: true },
      { id: 'ktk-2', name: 'Bueno Crunch', description: 'Rich kinder bueno cream with chocolate drizzle', price: 28.00, category: 'Cake', available: true },
      { id: 'ktk-3', name: 'Pistachio Kunafa', description: 'Premium pistachio spread with crispy kunafa', price: 35.00, category: 'Cake', available: true },
      { id: 'ktk-4', name: 'Belgium Chocolate', description: 'Decadent melted dark Belgium chocolate filling', price: 28.00, category: 'Cake', available: true },
      { id: 'ktk-5', name: 'Durian D24', description: 'Creamy fresh D24 durian filling', price: 32.00, category: 'Cake', available: true },
      { id: 'ktk-6', name: 'Biscoff Crunchy', description: 'Classic Lotus Biscoff spread and crushed biscuits', price: 28.00, category: 'Cake', available: true },
      { id: 'cc-1', name: 'Belgium Choc Cheesecake', description: 'Chilled rich chocolate cheesecake slice', price: 15.00, category: 'Cheese Cake', available: true },
      { id: 'cc-2', name: 'Red Velvet Cheesecake', description: 'Velvety cream cheese on red velvet sponge', price: 15.00, category: 'Cheese Cake', available: false },
      { id: 'cc-3', name: 'Pandan Gula Melaka Cheesecake', description: 'Pandan infused cheesecake with palm sugar syrup', price: 15.00, category: 'Cheese Cake', available: true },
      { id: 'ktk-d1', name: 'Iced Matcha Latte', description: 'Ceremonial matcha whisked with fresh chilled milk', price: 9.00, category: 'Drinks', available: true },
      { id: 'ktk-d2', name: 'Kopi Kampung Cold Brew', description: 'Signature chilled local coffee blend', price: 6.50, category: 'Drinks', available: true },
    ],
  },
  {
    id: 'kafe-faruq',
    name: 'Kafe Mahallah Faruq',
    location: 'Mahallah Faruq, Block B, IIUM Gombak',
    openHours: '5:00 pm - 12:00 am',
    isOpen: true,
    menu: [
      { id: 'faruq-1', name: 'Chicken Shawarma Wrap', description: 'Grilled chicken wrapped in pita with homemade garlic sauce', price: 8.00, category: 'Shawarma', available: true },
      { id: 'faruq-2', name: 'Beef Shawarma Wrap', description: 'Tender spiced beef with tahini sauce in toasted pita', price: 10.00, category: 'Shawarma', available: true },
      { id: 'faruq-3', name: 'Shawarma Platter with Fries', description: 'Sliced chicken shawarma with golden fries and salad', price: 12.00, category: 'Platter', available: true },
      { id: 'faruq-4', name: 'Crispy French Fries', description: 'Golden seasoned potato fries with garlic dip', price: 5.00, category: 'Sides', available: true },
      { id: 'faruq-5', name: 'Barbican Apple Malt', description: 'Refreshing non-alcoholic carbonated malt drink', price: 4.50, category: 'Drinks', available: true },
    ],
  },
  {
    id: 'kafe-ali',
    name: 'Kafe Mahallah Ali',
    location: 'Mahallah Ali, Block C, IIUM Gombak',
    openHours: '7:00 am - 10:00 pm',
    isOpen: true,
    menu: [
      { id: 'ali-1', name: 'Nasi Lemak Ayam Goreng', description: 'Fragrant coconut rice with crispy spiced chicken and sambal', price: 8.50, category: 'Rice', available: true },
      { id: 'ali-2', name: 'Nasi Ayam Penyet', description: 'Smashed fried chicken with fiery sambal, tempeh and rice', price: 9.00, category: 'Rice', available: true },
      { id: 'ali-3', name: 'Mee Goreng Mamak', description: 'Stir-fried yellow noodles with egg, tofu and bean sprouts', price: 6.50, category: 'Noodles', available: true },
      { id: 'ali-4', name: 'Roti Canai Special', description: 'Crispy roti canai served with dhal and chicken curry', price: 3.00, category: 'Roti', available: true },
      { id: 'ali-5', name: 'Teh Tarik Kaw', description: 'Traditional pulled tea with condensed milk', price: 2.50, category: 'Drinks', available: true },
    ],
  },
]

export default vendors