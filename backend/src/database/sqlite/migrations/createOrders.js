const createOrders = `
CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER REFERENCES users(id),
    orderStatus VARCHAR,
    totalPrice VARCHAR,
    paymentMethod VARCHAR,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 )
 `;

module.exports = createOrders;
