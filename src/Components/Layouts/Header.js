import React, {useState} from 'react'
import '../../Styles/HeaderStyle.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from "../../Assets/Logo.png"

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
                        <Nav.Link to="/" >Home</Nav.Link>
                        <Nav.Link to="/About">About</Nav.Link>
                        <Nav.Link to="/Features">Features</Nav.Link>
                        <Nav.Link to="/Testimonials">Testimonials</Nav.Link>
                        <Nav.Link to="/Pricing">Pricing</Nav.Link>
                        <Nav.Link to="/News">News</Nav.Link>
                        <Nav.Link to="/Contact">Contact</Nav.Link>
                        <Nav.Link to="/">
                        <div>
                            <button type="button" class="btn btn-dark">Sign Up</button>
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