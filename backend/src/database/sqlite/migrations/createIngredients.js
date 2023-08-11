const createIngredients = `
CREATE TABLE IF NOT EXISTS ingredients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR,
    dish_id INTEGER REFERENCES dishes(id) ON DELETE CASCADE
 )
 `;

module.exports = createIngredients;
