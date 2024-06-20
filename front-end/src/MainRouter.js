import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Products from "./components/training/products/Products";

const tele = window.Telegram.WebApp;

export default function MainRouter() {
  useEffect(() => {
    tele.ready();
    tele.expand();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/training/products",
      element: <Products />,
    },
  ]);

  return <RouterProvider router={router} />;
}
