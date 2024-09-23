import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import shop from "../../Assets/ux-women.jpg"

function Section4() {
  return (
    <>
    <section className="section4">
        <Container>
          <Row>
            <Col className='col-lg-6 col-md-6 pt-5 pb-5'>
                <img src={shop} alt="shop" />
            </Col>
             <Col className='col-lg-6 col-md-6 pt-5'>
                <h1>Our UX research process</h1>
                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p> 

                <h4 className='pt-2'>Objectives</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua.</p>

                <h4 className='pt-2'>Hypotheses</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua.</p>

                <h4 className='pt-2'>Methods</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua.</p>

                <h4 className='pt-2'>Conduct</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua.</p>

                <h4 className='pt-2'>Synthesis</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua.</p>
              </Col>
            </Row>
        </Container>
    </section>

    </>
  )
}

export default Section4