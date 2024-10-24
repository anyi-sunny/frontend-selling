import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./MenuBar.css";


export default function MenuBar () {
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand navbar-dark bg-dark" href="#">Bowdoin Reselling</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse navbar-dark bg-dark" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active navbar-dark bg-dark">
        <a class="nav-link navbar-dark bg-dark" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item navbar-dark bg-dark">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item navbar-dark bg-dark">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item dropdown navbar-dark bg-dark">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Account
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Settings</a>
          <a class="dropdown-item" href="#">Items</a>
          <a class="dropdown-item" href="#">Likes</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}