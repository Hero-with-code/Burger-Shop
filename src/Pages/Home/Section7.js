import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import icon1 from "../../Assets/icon1.png"
import icon2 from "../../Assets/icon2.png"
import icon3 from "../../Assets/icon3.png"

function Section7() {
  return (
    <>
    <section className="section1 main-section3">
        <Container>
          <Row>
            <Col className="text-center mb-5">
                <h2>Our Pricing</h2>
                <p className='para'>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra<br /> maecenas accumsan lacus vel facilisis.</p>
            </Col>
          </Row>  
        </Container>
    </section>

    <section className="section7 main-section7"> 
        <Container>   
        <Row className="d-flex">
                <Col>
                    <div className='section-icon pt-1'>
                        <div className='icon bg1 d-flex justify-content-center align-items-center'>
                            <div>
                                <img src={icon1} alt='section7-card-icons' />
                            </div>                           
                        </div>
                            <h3>Basic Plan</h3>
                            <p className='justify-content-start align-items-start'>5 GB Bandwidth
                            Highest Speed 1 GB Storage Unlimited Website Unlimited Users 24x7 Great Support Data Security and Backups Monthly Reports and Analytics</p> <hr />
                            <h3 className='text-center pt-2 pb-2'>$549</h3>
                            <p className='text-center pb-2'>Per Month</p>
                            <button type="button" class="btn btn-danger">SELECT</button>
                    </div>
                     
                </Col>
                <Col>
                    <div className='section-icon pt-1'>
                        <div className='icon bg1 d-flex justify-content-center align-items-center'>
                            <div>
                                <img src={icon2} alt='section7-card-icons' />
                            </div>
                            
                        </div>
                            <h3>Advanced Plan</h3>
                            <p>10 GB Bandwidth Highest Speed 2 GB Storage Unlimited Website Unlimited Users 24x7 Great Support Data Security and Backups Monthly Reports and Analytics</p> <hr />
                            <h3 className='text-center pt-2 pb-2'>$749</h3>
                            <p className='text-center pb-2'>Per Month</p>
                            <button type="button" class="btn btn-danger btn2">SELECT</button>
                        </div>
                    </Col>
                <Col>
                    <div className='section-icon pt-1'>
                    <div className='icon bg1 d-flex justify-content-center align-items-center'>
                            <div>
                                <img src={icon3} alt='section7-card-icons' />
                            </div>                           
                        </div>
                            <h3>Expert Plan</h3>
                            <p>15 GB Bandwidth Highest Speed 3 GB Storage Unlimited Website Unlimited Users 24x7 Great Support Data Security and Backups Monthly Reports and Analytics</p> <hr />
                            <h3 className='text-center pt-2 pb-2'>$949</h3>
                            <p className='text-center pb-2'>Per Month</p>
                            <button type="button" class="btn btn-danger">SELECT</button>
                    </div>
                </Col>
            </Row>
        </Container>  
    </section>
    </>
  )
}

export default Section7