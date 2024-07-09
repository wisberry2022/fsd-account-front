import { Home } from "@/1.pages/home";
import { Journal } from "@/1.pages/journal";
import { Statement } from "@/1.pages/slip";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/statement",
    element: <Statement />,
  },
  {
    path: "/journal",
    element: <Journal />,
  },
]);
