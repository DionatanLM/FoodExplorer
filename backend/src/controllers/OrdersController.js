const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite");
const knex = require("../database/knex");

class OrdersController {
  async create(request, response) {
    const { cart, orderStatus, totalPrice, paymentMethod } = request.body;
    const user_id = request.user.id;

    const [order_id] = await knex("orders").insert({
      orderStatus,
      totalPrice,
      paymentMethod,
      user_id,
    });

    const itemsInsert = cart.map((cart) => {
      return {
        title: cart.title,
        quantity: cart.quantity,
        dish_id: cart.dish_id,
        order_id,
      };
    });

    await knex("orders_items").insert(itemsInsert);

    return response.status(201).json(order_id);
  }

  async getAll(request, response) {
    try {
      const orders = await knex("orders_items")
        .select([
          "orders.id",
          "orders.user_id",
          "orders.orderStatus",
          "orders.totalPrice",
          "orders.paymentMethod",
          "orders.created_at",
        ])

        .innerJoin("orders", "orders.id", "orders_items.order_id")
        .groupBy("orders.id");

      const orders_items = await knex("orders_items");

      const ordersWithItems = orders.map((order) => {
        const orderItem = orders_items.filter(
          (item) => item.order_id === order.id
        );

        return {
          ...order,
          items: orderItem,
        };
      });

      return response.status(200).json(ordersWithItems);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Internal server error" });
    }
  }

  async get(request, response) {
    const user_id = request.user.id;

    const user = await knex("users").where({ id: user_id }).first();

    if (!user) {
      throw new AppError("Pedido não encontrado");
    }

    if (!user.isAdmin) {
      const orders = await knex("orders_items")
        .where({ user_id })
        .select([
          "orders.id",
          "orders.user_id",
          "orders.orderStatus",
          "orders.totalPrice",
          "orders.paymentMethod",
          "orders.created_at",
        ])

        .innerJoin("orders", "orders.id", "orders_items.order_id")
        .groupBy("orders.id");

      const orders_items = await knex("orders_items");
      const ordersWithItems = orders.map((order) => {
        const orderItem = orders_items.filter(
          (item) => item.order_id === order.id
        );

        return {
          ...order,
          items: orderItem,
        };
      });

      return response.status(200).json(ordersWithItems);
    } else {
      const orders = await knex("orders_items")
        .select([
          "orders.id",
          "orders.user_id",
          "orders.orderStatus",
          "orders.totalPrice",
          "orders.paymentMethod",
          "orders.created_at",
        ])

        .innerJoin("orders", "orders.id", "orders_items.order_id")
        .groupBy("orders.id");

      const orders_items = await knex("orders_items");
      const ordersWithItems = orders.map((order) => {
        const orderItem = orders_items.filter(
          (item) => item.order_id === order.id
        );

        return {
          ...order,
          items: orderItem,
        };
      });

      return response.status(200).json(ordersWithItems);
    }
  }

  async update(request, response) {
    const { id, orderStatus } = request.body;

    await knex("orders").update({ orderStatus }).where({ id });

    return response.status(201).json();
  }
}

module.exports = OrdersController;
