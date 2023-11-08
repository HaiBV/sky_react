import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import "./style.css";

import store from "store";

import Root from "components/layout/Root";
import Landing from "components/layout/Landing";
import Login from "components/Login";
import Register from "components/Register";
import { loadUser } from "features/auth/auth.slice";
import { setAuthToken } from "utils/requestConfig";

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

App.whyDidYouRender = true;

export default App;
