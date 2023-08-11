const { Router } = require("express");

const CategoriesController = require("../controllers/CategoriesController");
const categoriesController = new CategoriesController();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const ensureIsAdmin = require("../middlewares/ensureIsAdmin");

const categoriesRouter = Router();

categoriesRouter.use(ensureAuthenticated);

categoriesRouter.get("/", categoriesController.getAll);
categoriesRouter.post("/", ensureIsAdmin, categoriesController.create);
categoriesRouter.get("/dishes", categoriesController.getDishesByCategory);

module.exports = categoriesRouter;
