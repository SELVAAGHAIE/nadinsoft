import { createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Dashborad from "./Pages/Dashboard";
import App from "./App";
const router = createBrowserRouter([
  { path: "/", element: <Login /> },

  {
    path: "dash",
    element: <Dashborad></Dashborad>,
  },
]);
export default router;
// import { createBrowserRouter, Navigate } from "react-router-dom";
// import App from "./App";
// import Login from "./Pages/Login";
// import Dashboard from "./Pages/Dashboard";
// import ProtectedRoute from "./components/ProtectedRoute";
// import PublicOnlyRoute from "./components/PublicOnlyRoute";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />, // این layout باید <Outlet /> داشته باشه
//     children: [
//       {
//         index: true,
//         element: <Navigate to="/login" replace />,
//       },
//       {
//         path: "login",
//         element: (
//           <PublicOnlyRoute>
//             <Login />
//           </PublicOnlyRoute>
//         ),
//       },
//       {
//         path: "dashboard",
//         element: (
//           <ProtectedRoute>
//             <Dashboard />
//           </ProtectedRoute>
//         ),
//       },
//     ],
//   },
// ]);

// export default router;
