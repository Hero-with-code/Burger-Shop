import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

function Section9() {
  return (
    <>
    <section className="section9 mt-5">
    <Container>
          <Row>
            <Col className="text-center pt-5">
                <h2>Contact Us</h2>
                <p className='para'>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra<br /> maecenas accumsan lacus vel facilisis.</p>
            </Col>
          </Row>  
        </Container>
        <Container className='mt-5'>
          <Row>
            <Col sm={8}>
                <div className='contact1'>
                    <table>
                        <tr>
                            <td>
                                <div>
                                    <label className='con'>Name</label> 
                                    <label className='cons-email'>Email</label><br />
                                    <input type='text' placeholder='Enter Your Name' className='con' />
                                    <input type='text' placeholder='Enter Your Email' className='con' /><br />
                                    <label className='con'>Subject</label>
                                    <label className='cons-no'>Phone Number</label><br />
                                    <input type='text' placeholder='Enter Your Subject' className='con' />
                                    <input type='text' placeholder='Enter Your Number' className='con' /><br />
                                    <label className='con'>Message</label><br />
                                    <textarea type='text' placeholder='Enter Your SMS' className='con' /><br />
                                    <button type="button" class="btn btn-danger">Send Message</button>
                                </div>
                            </td>
                           </tr>
                    </table>
                </div>
            </Col>
            <Col sm={4} >
                <div className='contact2'>
                    <div className='pt-5'>
                        <h5>Address:</h5>
                        <p>1828 Johns Drive Glenview, IL 60025</p>
                        <h5>Email:</h5>
                        <p>support@pluck.com</p>
                        <h5>Phone:</h5>
                        <p> +91 - 999 888 777</p>
                        <h5>Website:</h5>
                        <p>www.GreenTech.com</p>
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