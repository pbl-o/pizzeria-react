import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import conversor from "../utils/conversor.js";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { UserContext } from "../context/UserContext.jsx";

const MyNavbar = () => {
  const { total, setCartArray } = useContext(CartContext);
  const { logOut } = useContext(UserContext);
  const token =
    localStorage.getItem("token") != undefined
      ? localStorage.getItem("token")
      : null;
  const navigateNavbar = useNavigate();

  const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
  return (
    <Navbar
      expand="lg"
      className="bg-dark w-100 d-flex justify-content-between"
      variant="dark"
    >
      <Container fluid>
        <Navbar.Brand
          as={Nav.Link}
          to="/"
          onClick={() => {
            navigateNavbar("/");
          }}
        >
          Pizzería Ticcino
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100">
            <div className="d-flex flex-column flex-lg-row gap-2 gap-lg-">
              <NavLink className={setActiveClass} to="/" end>
                🍕Home
              </NavLink>
              <NavLink
                className={setActiveClass}
                to={"/login"}
                onClick={() => {
                  if (token) {
                    logOut();
                    setCartArray([]);
                  }
                }}
              >
                {token ? "🔐Logout" : "🔐Login"}
              </NavLink>
              <NavLink
                className={setActiveClass}
                to={token ? "/profile" : "/register"}
              >
                {token ? "🔐Profile" : "🔐Register"}
              </NavLink>
            </div>

            <div className="ms-auto">
              <NavLink className={setActiveClass} to="/cart">
                🛒 Total: {conversor(total)}
              </NavLink>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
