import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "store";

// TODO: move to appropriate folder
const PrivatedRoutes = () => {
  const { isAuthenticated, loading, user } = useAppSelector((store) => store.auth);

  // TODO: redirect to login and keep previous page to redirect back after login success
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  if (loading || user === null) {
    return <>Loading...</>;
  }

  return <Outlet />;
};

export default PrivatedRoutes;
