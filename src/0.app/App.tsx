import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/AppRouter";
import "./styles/globals-var.css";
import "./styles/globals.css";
import "./styles/globals-color.css";
import { SWRConfig } from "swr";
import { axiosInstance } from "@/5.shared/api";

const App: FC = () => {
  return (
    <>
      <SWRConfig
        value={{
          fetcher: async (url) => {
            const response = await axiosInstance.get(url);
            return response.data;
          },
        }}
      >
        <RouterProvider router={router} />
      </SWRConfig>
    </>
  );
};

export default App;
