import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/AppRouter";
import "./styles/globals-var.css";
import "./styles/globals.css";
import "./styles/globals-color.css";

const App: FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
