import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import LogoutButton from "./logout"
import LoginButton from "./login"
class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link" style={{color:'white'}}>Home</Link></NavItem>
        
        <NavItem><Link to="/profile" className="nav-link" style={{color:'white'}}>about</Link></NavItem> 
        {/* focus here */}
<NavItem> <LoginButton/></NavItem>
<NavItem> <LogoutButton/></NavItem>

        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
    )
  }
}

export default Header;
