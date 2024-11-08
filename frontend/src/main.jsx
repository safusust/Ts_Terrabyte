import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import LoginForm from "./pages/account/LoginForm.jsx";
import SignupForm from "./pages/account/SIgnupForm.jsx";
import ReportPage from "./pages/ReportPage.jsx";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <div className="bg-slate-900 text-red-500 flex justify-center items-center">
        Error 404 not found
      </div>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/account",
        children: [
          {
            path: "login",
            element: <LoginForm />,
          },
          {
            path: "signup",
            element: <SignupForm />,
          },
        ],
      },
      {
        path: "/reports",
        element: <ReportPage />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routerConfig} />
  </StrictMode>
);
