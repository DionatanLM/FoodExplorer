const createOrdersItems = `
CREATE TABLE IF NOT EXISTS orders_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  dish_id INTEGER REFERENCES dishes(id) ON DELETE CASCADE,
  title VARCHAR,
  quantity INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 )
    
 `;

module.exports = createOrdersItems;
