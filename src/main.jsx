import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; 
import { RouterProvider } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

import "./index.css";
import { router } from "./routes/Routes.jsx";
import Sidebar from "./components/darkmode/Sidebar.jsx";
import store from "./rtk/slices/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <div>
        {/* Add AnimatedCursor for the custom cursor effect */}
        <AnimatedCursor
          innerSize={8}
          outerSize={40}
          color="0, 0, 255"
          outerAlpha={0.2}
          innerScale={1}
          outerScale={1.5}
          clickables={["a", "button", "input", "textarea", "select", "label"]}
        />
        <RouterProvider router={router} />
        <Sidebar />
      </div>
    </Provider>
  </StrictMode>
);
