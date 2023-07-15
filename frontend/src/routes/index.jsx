import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { SignIn } from "../pages/SignIn";

export function Routes() {
  return (
    <BrowserRouter>
      {/* {user ? <AppRoutes /> : <AuthRoutes />} */}
      <AppRoutes />
    </BrowserRouter>
  );
}
