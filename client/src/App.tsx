import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import "./style.css";

import store from "store";

import Root from "components/layout/Root";
import Landing from "components/layout/Landing";
import Login from "components/Login";
import Register from "components/Register";
import PrivatedRoutes from "routers/PrivatedRoutes";
import { loadUser } from "features/auth/auth.slice";
import { setAuthToken } from "utils/requestConfig";
import Dashboard from "features/dashboard/Dashboard";

// TODO: try another way to manager router (<Router />)
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
      {
        element: <PrivatedRoutes />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
]);

if (localStorage.getItem("token")) {
  setAuthToken(localStorage.getItem("token") as string);
}

const App = () => {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.dispatch(loadUser());
    }
  }, []);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
