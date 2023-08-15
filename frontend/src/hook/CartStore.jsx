import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("@foodexplorer:cart");
    return JSON.parse(storedCart) || [];
  });

  const [orders, setOrders] = useState([]);

  const handleAddDishToCart = (data, quantity, image) => {
    try {
      const { id, title, price } = data;
      const priceFormatted = quantity * parseFloat(price.replace(",", "."));

      const order = { id, title, price: priceFormatted, image, quantity };

      const orderExists = cart.some(
        (userOrder) => userOrder.title === order.title
      );
      if (orderExists) {
        alert("Esse item já está no carrinho");
        return;
      }

      setCart((prevCart) => [...prevCart, order]);
      alert("Item adicionado ao carrinho");
      
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível adicionar o item ao carrinho");
      }
    }
  };

  const handleRemoveDishFromCart = (deleted) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== deleted));
  };

  const total = cart.reduce((value, item) => value + item.price, 0);

  const handleResetCart = () => {
    localStorage.removeItem("@foodexplorer:cart");
    setCart([]);
  };

  useEffect(() => {
    localStorage.setItem("@foodexplorer:cart", JSON.stringify(cart));
  }, [cart]);

  const cartContextValue = {
    cart,
    handleAddDishToCart,
    handleRemoveDishFromCart,
    total: total,
    orders,
    setOrders,
    handleResetCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

export { CartProvider, useCart };
