const sqliteConnection = require("../../sqlite");
const createUsers = require("./createUsers");
const createCategories = require("./createCategories");
const createOrders = require("./createOrders");
const createOrdersItems = require("./createOrdersItems");
const createIngredients = require("./createIngredients");
const createDishes = require("./createDishes");

async function migrationRun() {
  const schemas = [
    createUsers,
    createDishes,
    createIngredients,
    createCategories,
    createOrders,
    createOrdersItems,
  ].join(";\n");

  sqliteConnection()
    .then((db) => db.exec(schemas))
    .catch((error) => console.log(error));
}

module.exports = migrationRun;
