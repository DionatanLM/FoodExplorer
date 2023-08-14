import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Favorites } from "../pages/Favorites";
import { Product } from "../pages/Product";
import { Orders } from "../pages/Orders";
import { NewDish } from "../pages/NewDish";
import { useAuth } from "../hook/auth";
import { EditDish } from "../pages/EditDish";
import { OrderHistoric } from "../pages/OrderHistoric";

export function AppRoutes() {
  const { user } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/historic" element={<OrderHistoric />} />
      <Route path="/favorites" element={<Favorites />} />
      {user.isAdmin && <Route path="/product/edit/:id" element={<EditDish />} />}
      {user.isAdmin && <Route path="/product/new" element={<NewDish />} />}
    </Routes>
  );
}
