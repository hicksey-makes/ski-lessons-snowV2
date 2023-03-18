import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';

function SkiNavbar() {

  return (<>
    <Nav id="navbar" className="justify-content-center flex-column text-center">
    <NavLink to="/">
    <Navbar.Brand id="branding" className="">
      <img
        src="/images/snowboard_icon75-75.png"
        width="40"
        height="40"
        className=""
        alt=""
      />{' '}
      Butter Boarder
    </Navbar.Brand>
    </NavLink>
      <Nav.Item className="topnav">
        <NavLink to="/about/" className="nav-link">About</NavLink>
      </Nav.Item>
      <Nav.Item className="topnav">
        <NavLink to="/schedule/" className="nav-link">Schedule</NavLink>
      </Nav.Item>
      <Nav.Item className="topnav ml-auto" id="cart">
        <NavLink to="/cart/" className="nav-link">Cart</NavLink>
      </Nav.Item>
    </Nav>
  </>)
}

export default SkiNavbar;
