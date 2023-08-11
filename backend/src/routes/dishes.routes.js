const { Router } = require("express");
const uploadConfig = require("../configs/upload");
const multer = require("multer");

const DishesController = require("../controllers/DishesController");
const dishesController = new DishesController();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const ensureIsAdmin = require("../middlewares/ensureIsAdmin");
const upload = multer(uploadConfig.MULTER);

const dishesRouter = Router();

dishesRouter.use(ensureAuthenticated);

dishesRouter.post("/", ensureIsAdmin, upload.single("image"), dishesController.create);
dishesRouter.get("/", dishesController.index);
dishesRouter.get("/:id", dishesController.getById);
dishesRouter.put("/", upload.single("image"), dishesController.update);

module.exports = dishesRouter;
