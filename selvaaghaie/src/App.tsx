import React from "react";
import Dashboard from "./Pages/Dashboard";
import { Box } from "@mui/material";
import Login from "./Pages/Login";
import { Outlet } from "react-router-dom";

function App() {
  return <Outlet />;
}

export default App;
