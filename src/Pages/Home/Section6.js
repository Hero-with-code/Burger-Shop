import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import c1 from "../../Assets/client1.png"
import c2 from "../../Assets/client2.png"
import c3 from "../../Assets/client3.png"

function Section6() {
  return (
    <>
    <section className="section6">
    <Container>
          <Row>
            <Col className="text-center mb-5">
                <h2>Our customer feedback</h2>
                <p className='pb-3'>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra<br /> maecenas accumsan lacus vel facilisis..</p>
            </Col>
          </Row>  
        </Container>
        <Container>   
        <Row className="d-flex">
                <Col>
                    <div className='section-icon pt-1'>
                        <div className='icon bg1 d-flex justify-content-center align-items-center'>
                            <div>
                                <img src={c1} alt='card-image' />
                            </div>                           
                        </div>
                            <p className='justify-content-start align-items-start pt-5'>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            <h3 className="text-center">Janson Sthatham</h3>
                            <p className="text-center">CEO Themfores</p>
                    </div>
                </Col>
                <Col>
                    <div className='section-icon pt-1'>
                        <div className='icon bg1 d-flex justify-content-center align-items-center'>
                            <div>
                            <img src={c2} alt='card-image' />
                            </div>
                        </div> 
                            <p className='pt-5'>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            <h3 className="text-center">Steven Smith</h3>
                            <p className="text-center">CEO EnvyTheme</p>
                        </div>
                    </Col>
                <Col>
                    <div className='section-icon pt-1'>
                    <div className='icon bg1 d-flex justify-content-center align-items-center'>
                            <div>
                                <img src={c3} alt='card-image' /> 
                            </div>                           
                        </div>
                            <p className='pt-5'>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            <h3 className="text-center">David Warner</h3>
                            <p className="text-center">CEO Company</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Section6