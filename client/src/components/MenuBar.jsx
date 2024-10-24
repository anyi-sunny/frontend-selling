// import React from "react";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import "./MenuBar.css";


// export default function MenuBar () {
//     return (
//         <div>
//         <nav className="navbar navbar-expand-lg navbar-warning bg-warning" style={{ padding: 20 }}>
//   <a class="navbar-brand navbar-warning bg-warning" href="#">Bowdoin Reselling</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <div class="collapse navbar-collapse navbar-warning bg-warning" id="navbarNavDropdown">
//     <ul class="navbar-nav">
//       <li class="nav-item active navbar-warning bg-warning">
//         <a class="nav-link navbar-warning bg-warning" href="#">Home <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="nav-item navbar-warning bg-warning">
//         <a class="nav-link" href="#">Features</a>
//       </li>
//       <li class="nav-item navbar-warning bg-warning">
//         <a class="nav-link" href="#">Pricing</a>
//       </li>

//       <li class="nav-item dropdown navbar-warning bg-warning" style={{ float: "right"}}> 
//         <a class="nav-link" href="#">Account</a>
//       </li>
  
//     </ul>
//   </div>
// </nav>
//         </div>
//     )
// }

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './MenuBar.css';

export default function MenuBar() {
  return (
    <Navbar bg="warning" expand="lg" style={{ padding: 20 }}>
      <Container>
        <Navbar.Brand href="#">Bowdoin Reselling</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavDropdown" />
        <Navbar.Collapse id="navbarNavDropdown">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Features</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
