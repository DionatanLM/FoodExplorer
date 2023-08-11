const { Router } = require("express");
const dishesRouter = require("./dishes.routes");
const usersRouter = require("./users.routes");
const ordersRouter = require("./orders.routes");
const sessionsRouter = require("./sessions.routes");
const categoriesRouter = require("./categories.routes");

const routes = Router();

routes.use("/orders", ordersRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/users", usersRouter);
routes.use("/dishes", dishesRouter);
routes.use("/categories", categoriesRouter);

module.exports = routes;
