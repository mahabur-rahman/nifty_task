import "./header.css";
import { Container, Navbar, Dropdown } from "react-bootstrap";
import logo from "../../images/nifty.png";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "../../context/Context";

const Header = () => {
  const { user, dispatch } = useContext(UserContext);

  // logout user
  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Link to="/" className="text-black link">
            <img src={logo} alt="logo" className="logo" />
            <span className="mx-2 fw-bold">NIFTY IT SOLUTION LTD</span>
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {!user && (
              <>
                <Navbar.Text className="nav_link">
                  <Link to={`/register`} className="quick_link">
                    Register
                  </Link>
                </Navbar.Text>
                <Navbar.Text className="mx-3 nav_link">
                  <Link to={`/login`} className="quick_link">
                    Login
                  </Link>
                </Navbar.Text>
              </>
            )}

            {user && (
              <Navbar.Text className="nav_link">
                <Link to={`/payment`} className="quick_link">
                  Payment
                </Link>
              </Navbar.Text>
            )}

            {user && (
              <Navbar.Text className="mx-3 nav_link">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <FaUserAlt />
                    <span className="mx-2">Mahabur </span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link to={`/profile`} className="quick_link">
                        Profile
                      </Link>
                    </Dropdown.Item>
                    {/* <Dropdown.Item>
                      <Link to={`/payment`} className="quick_link">
                        Payment
                      </Link>
                    </Dropdown.Item> */}
                    <Dropdown.Item>
                      <button className="logout_btn" onClick={logout}>
                        Logout
                      </button>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Navbar.Text>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
