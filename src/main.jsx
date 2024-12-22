import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; // Import Provider
import { RouterProvider } from "react-router-dom";

import "./index.css";
import { router } from "./routes/Routes.jsx";
import Sidebar from "./components/darkmode/Sidebar.jsx";
import store from "./rtk/slices/store.js";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <div>
        <RouterProvider router={router} />
        <Sidebar />
      </div>
    </Provider>
  </StrictMode>
);
