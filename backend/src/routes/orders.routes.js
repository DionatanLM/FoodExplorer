const { Router } = require("express");

const OrdersController = require("../controllers/OrdersController");
const ordersController = new OrdersController();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const ensureIsAdmin = require("../middlewares/ensureIsAdmin");
const ordersRouter = Router();

ordersRouter.use(ensureAuthenticated);

ordersRouter.post("/", ordersController.create);
ordersRouter.get("/", ordersController.get);
ordersRouter.put("/", ensureIsAdmin, ordersController.update);

module.exports = ordersRouter;
