import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import './app.css'

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div class="Navbar">
    <Nav>
      {Auth.loggedIn() ? (
        <>
      <Nav.Item>
        <Nav.Link as={Link} to="/home">
          Add a Review
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/profile">
          Your Reviews
        </Nav.Link>
      </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={logout}>
              Logout
            </Nav.Link>
          </Nav.Item>
        </>
      ) : (
        <>
          <Nav.Item>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/signup" >
              Signup
            </Nav.Link>
          </Nav.Item>
        </>
      )}
    </Nav>
    </div>
  );
};

export default Header;
