import { createBrowserRouter } from "react-router-dom";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Cart, Home, Login, Menu, Register } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Register />,
  },
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/cardapio",
    element: (
      <>
        <Header />
        <Menu />
      </>
    ),
  },

  {
    path: "/carrinho",
    element: <Cart />,
  },
]);
