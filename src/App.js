import { useState, useEffect } from 'react';
import {Navbar, Container, Nav, NavDropdown, Carousel} from "react-bootstrap";
import player from './img/player.png';
import logo from './img/logot.png';
import club from './img/Title.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fontawesome/css/all.css';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline").then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong');
      }
    })
    .then((responseJson) => {
      const filteredElements = responseJson.filter(el => {return +el.price < 5});
      setData(filteredElements);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className="main">
      <Container>
     <Navbar variant="#C445F4" bg="transparent" expand="lg">
  <Container className="justify-content-between">
    <Navbar.Brand href="#">
      <img src={logo} className="logo__img" alt="logo" />
     penrose</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#" className="lightcol">home</Nav.Link>
        <Nav.Link href="#">new collections</Nav.Link>
        <NavDropdown title="store" id="basic-nav-dropdown">
          <NavDropdown.Item href="#">Women</NavDropdown.Item>
          <NavDropdown.Item href="#">Men</NavDropdown.Item>
          <NavDropdown.Item href="#">Kids</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#">contacts</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<div className="cnt">
<img src={club} alt="fashion club" className="cl__img"/>
<div className="sl">
<Carousel>
    {data.map((el) => (
  <Carousel.Item key={el.id}> 
    <i className="fas fa-quote-left quot"></i>
    <div className="sl__text">{el.name}</div>
  <div className="sl__sign">{el.price}</div>
  </Carousel.Item> 
))}  
</Carousel>
</div>
</div>
<a href="https://www.youtube.com/watch?v=V0BvePRKQxQ" target="_blank" rel="noopener noreferrer"><img src={player} className="player" alt="player" /></a>

</Container>
    </div>
  );
}

export default App;