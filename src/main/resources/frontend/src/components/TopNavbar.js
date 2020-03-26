import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Collapse, 
  Navbar, 
  NavbarToggler, 
  Nav, 
  NavItem } from 'reactstrap';
import { UserContext } from '../contexts/UserContextProvider'

export default function TopNavbar() {
  // useState creates a reactive variable,
  // much like data() in Vue
  // useState returns an array containing
  // the variable and the state-method 
  // to update the variable and trigger reactivity
  const [collapsed, setCollapsed] = useState(true);

  // a basic toggle to update the variable
  const toggleNavbar = () => setCollapsed(!collapsed);

  const { user, setUser } = useContext(UserContext)
  
  const logout = () => {
    fetch('/logout')
    setUser(null)
    console.log('Logging out');
  }

  /*  for auto expanding navbar 
      we have to provide expand="md" 
      as an attribute */
  return (
      <Navbar style={{backgroundColor: '#333'}} dark expand="md">
        <Link to="/" className="mr-auto navbar-brand">React Recipes</Link>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem> 
              <Link className="nav-link" to="/">All Recipes</Link>
            </NavItem>
            {user && (
              <NavItem>
                <Link className="nav-link" to="/new-recipe">New Recipe</Link>
              </NavItem>
            )}
            {!user ? (
              <NavItem>
                <Link className="nav-link" to="/perform-login">Login</Link>
              </NavItem>
            ) : (
              <NavItem 
                style={{cursor: 'pointer'}}
                onClick={logout}>
                Logout
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
  )
}