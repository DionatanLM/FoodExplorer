const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite");
const UserRepository = require("../repositories/UserRepository");
const UserCreateServices = require("../services/UserCreateService");
class UsersController {
  async get(req, res) {
    const database = await sqliteConnection();
    const users = await database.all("SELECT * FROM users");

    return res.status(200).json(users);
  }

  async create(req, res) {
    const { name, email, password } = req.body;

    const userRepository = new UserRepository();
    const userCreateServices = new UserCreateServices(userRepository);
    await userCreateServices.execute({ name, email, password });
    
    return res.status(201).json();
  }

  async update(req, res) {
    const { name, email, password, old_password } = req.body;
    const user_id = req.user.id;

    const database = await sqliteConnection();
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [
      user_id,
    ]);

    if (!user) {
      throw new AppError("Usuário não encontrado");
    }

    const userWithUpdatedEmail = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError("Este e-mail já está cadastrado");
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;

    if (password && !old_password) {
      throw new AppError(
        "Você precisa informar a senha antiga para atualizar a senha"
      );
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);

      if (!checkOldPassword) {
        throw new AppError("Senha antiga incorreta");
      }

      user.password = await hash(password, 8);
    }

    await database.run(
      `UPDATE users SET 
      name = ?, 
      email = ?,
      password = ?,
      update_at = DATETIME('now')
      WHERE id = ?`,
      [user.name, user.email, user.password, user_id]
    );

    return res.status(200).json(user);
  }
}

module.exports = UsersController;
