import React from 'react';
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return ( <>
  <div className="container-fixed">
          <Navbar bg="light" variant="light">

    <Navbar.Brand href="#home" style={{fontWeight:"bold" , marginLeft:"4rem"}}>
    <img
        alt=""
        src="logo.png"
        width="30"
        height="30"
        className="logo"
      />{' '}   CraftsVilla   </Navbar.Brand>
    <Nav className="mr-auto">
    <Nav.Link href="/">Home</Nav.Link>

    <NavDropdown title="Start" id="collasible-nav-dropdown" >
        <NavDropdown.Item href="#action/3.1">Branding</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Online Presence</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Store set up</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
        
      <NavDropdown title="Sell" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Online Store</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Sale Channel</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Buy button</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Checkout</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
        
      <NavDropdown title="Market" id="collasible-nav-dropdown"  >
        <NavDropdown.Item href="#action/3.1">Email marketing</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">CraftsVilla ping</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Facebook ads</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Google</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>

      <NavDropdown title="Manage" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Payments</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Shipping</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Capital</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
        
      <Nav.Link href="#pricing" style={{marginLeft:"230px"}}>Pricing</Nav.Link>

      <NavDropdown title="Learn" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Help center</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Guides</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Blog</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>

      <Nav.Link href="login" >Login</Nav.Link>
      <Button variant="#FF8C00" className="btn">Start Free Trial</Button>

    </Nav>
    </Navbar>
    </div>
  </> );
}
 
export default Header;