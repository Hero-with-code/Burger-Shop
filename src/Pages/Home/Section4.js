import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import promotions from "../../Assets/parmotions.jpg"

function Section4() {
  return (
    <>
    <section className="promotion_section">
        <Container>
            <Row className="align-items-center">
                <Col lg={6} className="text-center mb-5 mb-lg-0">
                <img src={promotions} alt="promotions" className="img-fluid" />
                </Col>
                <Col lg={6} className="px-5">
                    <h2>Nothing brings people together like a good burger</h2>
                    <p>Promotion is a type ofcommunicationbetween the buyer and the seller. The seller tries to persuade the buyer to purchase their goods or services through promotions. It helps in making the people aware of a product, service or a company.
                    </p>
                    <ul>
                        <li>
                            <p>abc def ghi jkl mno pqr st uvw xyz asd gjlj nnnnjf bbfby rrrrr lllll LLLLLL</p>
                        </li>
                        <li>
                            <p>
                            uucbuv bvuyvubrr vjbvyuuvb riurhuiv irviufuv fhuvru
                            </p> 
                        </li>
                        <li>
                            <p>
                            Abc def ghi jkl mno pqr st uvw xyz asd gjlj nnnnjf bbfby rrrrr lllll LLLLLL iuvrbuv rhfubrrlllr lrlrlrlr
                            </p>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </section>
    {/* BG Parallax Scroll  */}

        <section className="bg_parallax_scroll"></section>    
    </>
  )
}

export default Section4