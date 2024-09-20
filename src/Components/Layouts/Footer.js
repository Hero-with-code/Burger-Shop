import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
        // Sscroll State

  const [isVisible, setIsVisible] = useState(false);
  const scrollTop = () =>{
      window.scrollTo({
        top:0,
        behavior: "smooth",
      });
  };
  const listenToScroll = () =>{
    let heightToHidden = 250;
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  }

  useEffect(()=>{
      window.addEventListener("scroll", listenToScroll);
  });


  return (      
        <>
        <section className='footer'>
          <Container>
            <Row>
          
          <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Location</h5>
                <p>110001 New Delhi</p>
                <p>Okhla Vihar Metro 110020</p>
                <p>India - Delhi</p>
              </div>
          </Col>
          <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Working Hours</h5>
                <p>Mon-Fri: 10:00AM - 06:00PM</p>
                <p>Saturday: 10:00AM - 02:00PM</p>
                <p>Sunday: OF OF OF OF OF OF OF </p>
              </div>
          </Col>
          <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Oder Now</h5>
                <p>Call - - - - - - - - - - - -</p>
                <p><Link to="9117048402" className="calling">+91-911-000-0000</Link></p>
              </div>
          </Col>
          <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Follow Us</h5>
                <p>GreenTech pvt Ltd </p>
                <ul className="list-unstyled text-center mt-2">
                  <li>
                    <Link to="/">
                    <i class="bi bi-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                    <i class="bi bi-twitter-x"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                    <i class="bi bi-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                    <i class="bi bi-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
          </Col>
        </Row>
        <Row className="copy_right">
          <Col>
              <div>
                  <ul className="list-unstyled text-center mb-0">
                      <li>
                        <Link to="/">
                        © 2024 <span>Reyaz.Com</span> All Rights Reserved 
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                            About Us 
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                            Terms Of Use 
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                            Privacy Pollicy 
                        </Link>
                      </li>
                  </ul>
              </div>
          </Col>
        </Row>
      </Container>
    
        </section>
        <section>
          {/* Scroll To Top */}
        {isVisible && (<div className="scroll_top" onClick={scrollTop}>
            <i class="bi bi-chevron-double-up"></i>
        </div>)}
        </section>
  
        </>
  )
}

export default Footer;