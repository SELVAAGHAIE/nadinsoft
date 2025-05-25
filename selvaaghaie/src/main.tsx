import "@fontsource/roboto"; // Loads Roboto font styles

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import router from "./router";
import ReactDom from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import CustomThemeProvider from "./ThemeContext";
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";
import "./i18n";
import "@fontsource/roboto";
import { ThemeProvider } from "@mui/material";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CustomThemeProvider>
      <RouterProvider router={router} />
    </CustomThemeProvider>
  </StrictMode>
);
