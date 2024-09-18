import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

function Section3() {
  return (
    <>
    <section className="section1 main-section3">
        <Container>
          <Row>
            <Col className="text-center mb-5">
                <h2>Whats different from other's</h2>
                <p className='para'>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            </Col>
          </Row>  
        </Container>
    </section>

    <section className="section2 main-section3"> 
        <Container>   
        <Row className="d-flex">
                <Col>
                    <div className='section-icon pt-1'>
                        <div className='icon bg1 d-flex justify-content-center align-items-center'>
                            <div>
                                <i class="bi bi-code-slash"></i>
                            </div>                           
                        </div>
                            <h3>App Development</h3>
                            <p className='justify-content-start align-items-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices</p>
                    </div>
                </Col>
                <Col>
                    <div className='section-icon pt-1'>
                        <div className='icon bg1 d-flex justify-content-center align-items-center'>
                            <div>
                                <i class="bi bi-cloudy-fill"></i>
                            </div>
                            
                        </div>
                            <h3>Digital Branding</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices</p>
                        </div>
                    </Col>
                <Col>
                    <div className='section-icon pt-1'>
                    <div className='icon bg1 d-flex justify-content-center align-items-center'>
                            <div>
                                <i class="bi bi-code-slash"></i>
                            </div>                           
                        </div>
                            <h3>Cloud Storage</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices</p>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row className="d-flex">
              <Col>
                <div className='section-icon pt-1'>
                <div className='icon bg1 d-flex justify-content-center align-items-center'>
                            <div>
                            <i class="bi bi-cloudy-fill"></i>
                            </div>                           
                        </div>
                        <h3>Customization</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices</p>
                </div>
            </Col>
            <Col>
                <div className='section-icon pt-1'>
                <div className='icon bg1 d-flex justify-content-center align-items-center'>
                            <div>
                            <i class="bi bi-code-slash"></i>
                            </div>                           
                        </div>
                        <h3>UX Planning</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices</p>
                    </div>
                </Col>
            <Col>
                <div className='section-icon pt-1'>
                <div className='icon bg1 d-flex justify-content-center align-items-center'>
                            <div>
                            <i class="bi bi-cloudy-fill"></i>
                            </div>                           
                        </div>
                        <h3>Customer Support</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices</p>
                </div>
            </Col>
    </Row>
</Container>  
    </section>
    </>
  )
}

export default Section3