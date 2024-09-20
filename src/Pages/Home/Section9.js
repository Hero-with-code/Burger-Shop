import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Section9() {
  return (
    <>
    <section>
    <Container>
          <Row>
            <Col className="text-center pt-5">
                <h2>Contact Us</h2>
                <p className='para'>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra<br /> maecenas accumsan lacus vel facilisis.</p>
            </Col>
          </Row>  
        </Container>
        <Container>
          <Row>
            <Col sm={8} className="text-center pt-5">
                <div className='contact1'>
                    <table>
                        <tr>
                            <td>
                                <div>
                                    <label>Name</label><br />
                                    <input type='text' placeholder='Enter Your Name' /><br />
                                    <label>Subject</label><br />
                                    <input type='text' placeholder='Enter Your Subject' /><br />
                                    <label>Message</label><br />
                                    <textarea type='text' placeholder='Enter Your SMS' /><br />
                                    <button type="button" class="btn btn-danger">Send Message</button>
                                </div>
                            </td>
                            <td>
                                <div>
                                <label>Email</label><br />
                                    <input type='email' placeholder='Enter Your Email' /><br />
                                    <label>Phone Number</label><br />
                                    <input type='number' placeholder='Enter Your Number' />
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </Col>
            <Col sm={4} className="text-center pt-5">
                <div className='contact2'>
                    <div className='contact-detal'>
                        <h5>Address:</h5>
                        <p>1828 Johns Drive Glenview, IL 60025</p>
                        <h5>Email:</h5>
                        <p>support@pluck.com</p>
                        <h5>Phone:</h5>
                        <p> +91 - 999 888 777</p>
                        <h5>Website:</h5>
                        <Link href='#'>www.GreenTech.com</Link>
                    </div>
                </div>
            </Col>
          </Row>  
        </Container>
    </section>
    </>
  )
}

export default Section9