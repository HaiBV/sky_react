import Navbar from "components/layout/Navbar";
import Alert from "features/alert/Alert";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Alert />
        <Outlet />
      </div>
    </>
  );
};

export default Root;
