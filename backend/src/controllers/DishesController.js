const AppError = require("../utils/AppError");
const knex = require("../database/knex");
const DiskStorage = require("../providers/DiskStorage");

class DishesController {
  async create(request, response) {
    const { title, description, category_id, price, ingredients } =
      request.body;

    try {
      const checkDishAlreadyExists = await knex("dishes")
        .where({ title: title })
        .first();

      if (checkDishAlreadyExists) {
        throw new AppError("Este prato já existe no cardápio.");
      }

      const imageFileName = request.file.filename;

      const diskStorage = new DiskStorage();

      const filename = await diskStorage.saveFile(imageFileName);

      const [dish_id] = await knex("dishes").insert({
        image: filename,
        title,
        description,
        price,
        category_id,
      });

      const ingredientsInsert = ingredients.map((name) => {
        return {
          name,
          dish_id,
        };
      });

      await knex("ingredients").insert(ingredientsInsert);

      return response.status(201).json();
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Ocorreu um erro" });
    }
  }

  async index(request, response) {
    const { title, ingredients } = request.query;

    let dishes;

    const query = knex("dishes")
      .select([
        "dishes.id",
        "dishes.title",
        "dishes.description",
        "dishes.category_id",
        "dishes.price",
        "dishes.image",
      ])
      .orderBy("title");

    if (title) {
      query.whereLike("title", `%${title}%`);
    }

    if (ingredients) {
      const filterIngredients = ingredients
        .split(",")
        .map((ingredient) => ingredient.trim());

      query
        .innerJoin("ingredients", "dishes.id", "ingredients.dish_id")
        .whereIn("name", filterIngredients)
        .groupBy("dishes.id");
    }

    dishes = await query;

    const dishesIngredients = await knex("ingredients");
    const dishesWithIngredients = dishes.map((dish) => {
      const dishIngredient = dishesIngredients.filter(
        (ingredient) => ingredient.dish_id === dish.id
      );

      return {
        ...dish,
        ingredients: dishIngredient,
      };
    });

    return response.status(200).json(dishesWithIngredients);
  }

  async getAll() {
    const dishes = await knex("dishes").select();
    return dishes;
  }

  async getById(request, response) {
    const { id } = request.params;

    const dish = await knex("dishes").where({ id }).first();
    const ingredients = await knex("ingredients")
      .where({ dish_id: id })
      .orderBy("name");

    return response.status(201).json({
      ...dish,
      ingredients,
    });
  }

  async deleteDish(request, response) {
    const { id } = request.body;

    try {
      await knex("dishes").where({ id }).del();

      return response.status(201).json();
    } catch (error) {
      console.error("Erro ao excluir o prato:", error);
      return response.status(500).json({ error: "Ocorreu um erro" });
    }
  }

  async update(request, response) {
    const { id } = request.params; 
    const { title, description, category_id, price, ingredients } =
      request.body;

    try {
      const checkDishExists = await knex("dishes").where({ id }).first();

      if (!checkDishExists) {
        return response.status(404).json({ error: "Prato não encontrado." });
      }

      await knex("dishes").where({ id }).update({
        title,
        description,
        price,
        category_id,
      });

      if (ingredients) {
        await knex("ingredients").where({ dish_id: id }).del();

        const ingredientsInsert = ingredients?.map((name) => {
          return {
            name,
            dish_id: id,
          };
        });

        await knex("ingredients").insert(ingredientsInsert);
      }

      return response
        .status(200)
        .json({ message: "Prato atualizado com sucesso." });
    } catch (error) {
      console.error(error);
      return response
        .status(500)
        .json({ error: "Ocorreu um erro ao atualizar o prato." });
    }
  }
}

module.exports = DishesController;
