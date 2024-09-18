import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

function Section3() {
  return (
    <>
    <section className="s1">
        <Container>
          <Row>
            <Col className="text-center mb-5">
                <h2>Whats different from other's</h2>
                <p className='para'>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            </Col>
          </Row>  
        </Container>
    </section>

    <section className="s2">    
        <Row className="row justify-content-md-center">
            <Container>
                <table>
                    <tr>
                        <td>
                            <div className='col-lg-4 col-md-6'>
                                <div className='section-icon'>
                                    <div className='icon bg1'>
                                        <i class="bi bi-code-slash"></i>
                                    </div>
                                        <h3>App Development</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                    </div>
                                </div>
                        </td>
                        <td>
                            <div className='col-lg-4 col-md-6'>
                                <div className='section-icon'>
                                    <div className='icon bg1'>
                                        <i class="bi bi-cloudy-fill"></i>
                                    </div>
                                        <h3>Digital Branding</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                    </div>
                                </div>
                        </td>
                        <td>
                            <div className='col-lg-4 col-md-6'>
                                <div className='section-icon'>
                                    <div className='icon bg1'>
                                        <i class="bi bi-cloudy-fill"></i>
                                    </div>
                                        <h3>Cloud Storage</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                    </div>
                                </div>
                        </td>
                        </tr>

                        <tr>
                        <td>
                            <div className='col-lg-4 col-md-6'>
                                <div className='section-icon'>
                                    <div className='icon bg1'>
                                        <i class="bi bi-cloudy-fill"></i>
                                    </div>
                                        <h3>Customization</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className='col-lg-4 col-md-6'>
                                <div className='section-icon'>
                                    <div className='icon bg1'>
                                        <i class="bi bi-cloudy-fill"></i>
                                    </div>
                                        <h3>UX Planning</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className='col-lg-4 col-md-6'>
                                <div className='section-icon'>
                                    <div className='icon bg1'>
                                        <i class="bi bi-cloudy-fill"></i>
                                    </div>
                                        <h3>Customer Support</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
        </Container>
    </Row>  
    </section>
    </>
  )
}

export default Section3