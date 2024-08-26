import React from 'react'
import { Container, Row, Col, } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Section7() {
  return (
    <>
    <section className="contact_section7">
        <Container>
            <Row className="justify-content-center">
                <Col sm={8} className="text-center">
                    <h4>We Guarantee</h4>
                    <h2>30 Minutes Delivery!</h2>
                    <p>This chicken burger recipe is meant to be made on repeat with all the ingredients I try to keep stocked. Grab the meat, some fixings, and you’re good to go</p>
                    <Link to="/" className="btn btn_red px-4 py-2 rounded-0">
                        Call: 911-704-8402
                    </Link>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Section7