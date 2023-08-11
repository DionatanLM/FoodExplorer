const createDishes = `
CREATE TABLE IF NOT EXISTS dishes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR,
    description VARCHAR,
    category_id INTEGER REFERENCES categories(id),
    price VARCHAR,
    image VARCHAR
 )
 `;

module.exports = createDishes;
