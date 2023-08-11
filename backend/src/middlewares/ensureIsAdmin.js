const knex = require("../database/knex");
const AppError = require("../utils/AppError");

async function ensureIsAdmin(request, response, next) {
  const user_id = request.user.id;

  const user = await knex("users").where({ id: user_id }).first();

  if (!user.isAdmin) {
    throw new AppError("Você não tem permissão para acessar esta página", 401);
  }

  next();
}

module.exports = ensureIsAdmin;
