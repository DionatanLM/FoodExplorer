const AppError = require("../utils/AppError");
const knex = require("../database/knex");

class CategoriesController {
  async getAll(request, response) {
    const categories = await knex("categories");
    return response.status(200).json(categories);
  }

  async create(request, response) {
    const { name } = request.body;
    const checkCategoryAlreadyExists = await knex("categories")
      .where({ name })
      .first();
    if (checkCategoryAlreadyExists) {
      throw new AppError("Esta categoria já existe no cardápio.");
    }
    await knex("categories").insert({
      name,
    });
    return response.status(201).json();
  }

  async getDishesByCategory(request, response) {
    const { title, ingredients } = request.query;

    try {
      const categories = await knex("categories");

      let dishesQuery = knex("dishes")
        .select([
          "dishes.id",
          "dishes.title",
          "dishes.description",
          "dishes.category_id",
          "dishes.price",
          "dishes.image",
        ])
        .orderBy("dishes.title");

      if (title) {
        dishesQuery = dishesQuery.whereRaw("UPPER(dishes.title) LIKE ?", [
          `%${title.toUpperCase()}%`,
        ]);
      }

      const dishes = await dishesQuery;

      const dishesIngredients = await knex("ingredients");

      const categorizedDishes = categories.map((category) => {
        const categoryDishesWithIngredients = dishes
          .filter((dish) => dish.category_id === category.id)
          .map((dish) => {
            const dishIngredients = dishesIngredients.filter(
              (ingredient) => ingredient.dish_id === dish.id
            );

            return {
              ...dish,
              ingredients: dishIngredients,
            };
          });

        return {
          ...category,
          dishes: categoryDishesWithIngredients,
        };
      });

      const filteredCategories = categorizedDishes.filter(
        (category) => category.dishes.length > 0
      );

      return response.status(200).json(filteredCategories);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Internal server error" });
    }
  }
}

module.exports = CategoriesController;
