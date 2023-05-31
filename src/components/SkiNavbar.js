import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';

function SkiNavbar(props) {
  console.log(props);
  return (<>
    <Nav id="navbar" className=" flex-column text-center px-3 py-2">

    <NavLink exact to="/" id="branding" className="ps-sm-2 ps-md-4 ps-lg-2">
      <Navbar.Brand  className="">
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
        <NavLink to="/cart/" className="nav-link pe-lg-4">{`Cart (${props.quantity})`}</NavLink>
      </Nav.Item>
    </Nav>
  </>)
}

export default SkiNavbar;
