import { Home } from "@/1.pages/home";
import { Journal } from "@/1.pages/journal";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/journal",
    element: <Journal />,
  },
]);
