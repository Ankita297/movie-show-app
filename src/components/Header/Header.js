import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import "./style.css"
const Header = () => {
    return (<Navbar  bg="dark" fixed="top">
    <Container className="d-flex justify-content-center">
      <Navbar.Brand className="nav-heading" href="/" >Movie Show Booking</Navbar.Brand>
    </Container>
  </Navbar>
 )
}

export default Header
