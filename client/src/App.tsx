import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style.css";

import Root from "components/layout/Root";
import Landing from "components/layout/Landing";
import Login from "components/Login";
import Register from "components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <>Not found</>,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
