import { logout } from "features/auth/auth.slice";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, loading } = useAppSelector((state) => state.auth);

  const GuestLinks = (
    <ul>
      <li>
        <a href="#!">Developers</a>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  const AuthLinks = (
    <ul>
      <li>
        <a
          onClick={(e) => {
            e.preventDefault();
            dispatch(logout());
          }}
          href="#!"
        >
          Logout
        </a>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> DevConnector
        </Link>
      </h1>
			{/* FIXME: still flash before fetch loadUser */}
      {!loading && <>{isAuthenticated ? AuthLinks : GuestLinks}</>}
    </nav>
  );
};

export default Navbar;
