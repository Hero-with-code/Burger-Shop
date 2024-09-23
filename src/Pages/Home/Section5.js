import React from 'react'
import { Row, Col} from 'react-bootstrap'

function Section5() {
  return (
    <>
    <section className='sect-main'>
        <section className='section5-top'>
            <Row>
                <Col>
                    <div className="bg_parallax_scroll"> </div>
                </Col>
            </Row>  
    </section>

    <section className='section5-butt'>
        <Row>
            <Col>
                <div className='card1 card pt-1'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div>
                            <i class="bi bi-code-slash"></i>
                        </div>                           
                        </div>
                          <h3>Modern Design</h3>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices</p>
                    </div>    
                </Col>
            <Col>
                <div className='card2 card pt-1'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div>
                             <i class="bi bi-code-slash"></i>
                                </div>                           
                            </div>
                        <h3>Fast Loading</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices</p>
                </div>
            </Col>
            <Col>
                <div className='card3 card pt-1'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div>
                            <i class="bi bi-code-slash"></i>
                            </div>                           
                            </div>
                        <h3>Clean Code</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices</p>
                </div>
            </Col>
            </Row>
        </section>

        <div className='sect-3'></div>
            <Row className='text-center'>
                <Col>
                    <h2>1078</h2>
                    <p>Completed Projects</p>
                </Col>
                <Col>
                    <h2>250048</h2>
                    <p>Lines Code</p>
                </Col>
                <Col>
                    <h2>250</h2>
                    <p>Team Members</p>
                </Col>
                <Col>
                    <h2>2045</h2>
                    <p>Happy Clients</p>
                </Col>
            </Row>
    </section>
    </>
  )
}

export default Section5