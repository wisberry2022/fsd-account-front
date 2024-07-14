import { Home } from "@/1.pages/home";
import { Journal } from "@/1.pages/journal";
import { Slip } from "@/1.pages/slip";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/slip",
    element: <Slip />,
  },
  {
    path: "/journal",
    element: <Journal />,
  },
]);
