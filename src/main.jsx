import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Components/Routers/Routers.jsx";
import AuthProviders from "./Components/Pages/Providers/AuthProviders.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-[#001446]">
    <div className="max-w-[1450px] mx-auto">
      <AuthProviders>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </AuthProviders>
    </div>
  </div>
);
