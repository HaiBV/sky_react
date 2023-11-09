import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "store";

// TODO: move to appropriate folder
const PrivatedRoutes = () => {
  const { isAuthenticated } = useAppSelector((store) => store.auth);

  // TODO: redirect to login and keep previous page to redirect back after login success
  return isAuthenticated ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivatedRoutes;
