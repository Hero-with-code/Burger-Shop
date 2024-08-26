import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Logo from "../../Assets/Logo/Burgur.webp";
import { Link } from 'react-router-dom';
import yellows from '../../Assets/yellows.png'

function Section1() {
  return (
    <section className="hero_section">
      <Container>
        <Row>
            <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
                <img src={Logo} className="img-fluid burger_images_section1" alt="Hero" />
                <div className="price_badge">
                  <img src={yellows} alt='yellow' className='yellow_image' />
                    <div className="badge_text">
                        <h4 className="h4_xs">Only</h4>
                        
                        {/* <h4 className="h3_lg">50.99<i class="bi bi-currency-rupee"></i></h4> */}
                        <h4 className="h3_lg">$ 5.66</h4>
                        {/* <h4 className="h3_lg"><i class="bi bi-currency-rupee"></i>50</h4> */}

                    </div>
                </div>
            </div>
            </Col>
            <Col lg={5}>
                <div className="hero_text text-center">
                    <h1 className="text-white">New Burger</h1>
                    <h2 className="text-white">With Onion</h2>
                    <p className="text-white pt-2 pb-4">
                        Feugiat primis ligula risus auctor lareet augue egestas mauris viverra tortor in laculis pretium at magna mauris ipsum primis rhoncus Feugiat
                    </p>
                    <Link to="/" className="btn order_now btn_red">Order Now</Link>
                </div>
            </Col>
        </Row>
      </Container>  
    </section>
  )
}

export default Section1