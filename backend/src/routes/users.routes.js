const { Router } = require("express");

const UsersController = require("../controllers/UsersController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const userRouter = Router();

const usersController = new UsersController();

userRouter.get("/", usersController.get);
userRouter.post("/", usersController.create);
userRouter.put("/", ensureAuthenticated, usersController.update);

module.exports = userRouter;
