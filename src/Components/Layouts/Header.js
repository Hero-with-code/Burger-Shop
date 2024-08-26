import React, {useState} from 'react'
import '../../Styles/HeaderStyle.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from "../../Assets/Logo/image.jpg";


function Header() {
        const [nav, setNav] = useState(false);

        // Scrollbar Navbar
        const changevalueOnScroll = () =>{
          const ScrollValue = document?.documentElement?.scrollTop;
          ScrollValue > 100 ? setNav(true) : setNav(false);
        };

        window.addEventListener("scroll", changevalueOnScroll);

  return (
    <>
    <header>
    <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky" : ""}`}>
    <Container>
        <Navbar.Brand href="#home">
          <Link to="/" className="Logo">
            <img src={Logo} alt='Logo' className='img-fluid logo_images' />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
            <Nav.Link as={Link} to="/Manu">Our Menu</Nav.Link>
            <Nav.Link as={Link} to="/Shop">Shop</Nav.Link>
            <Nav.Link as={Link} to="/Blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/">
            <div>
            <i class="bi bi-bag fs-5"></i>
            <em className="roundpoint"><sup>2</sup></em>
            </div>
            </Nav.Link>
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    </>
  )
}

export default Header;