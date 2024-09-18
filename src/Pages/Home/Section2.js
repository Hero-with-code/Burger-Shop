import React from 'react'
import { Container, Row, Col, Carousel} from 'react-bootstrap'

import shop from "../../Assets/about-img1.jpg"
import s1 from "../../Assets/agency-partner1.png"
import s2 from "../../Assets/agency-partner2.png"
import s3 from "../../Assets/agency-partner3.png"
import s4 from "../../Assets/agency-partner4.png"
import s5 from "../../Assets/agency-partner5.png"
import s6 from "../../Assets/agency-partner6.png"

function Section2() {
  return (
    <>
     <section className="brand_section5">
        <Container>
            <Row>
                <div><h3>Trusted by over 2.5 milions company</h3></div>
                <Carousel>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="brand_img">
                                    <img src={s1} className="img-fluid" alt="brand-1" />
                                </div>
                                <div className="brand_img">
                                    <img src={s2} className="img-fluid" alt="brand-2" />
                                </div>
                                <div className="brand_img">
                                    <img src={s3} className="img-fluid" alt="brand-3" />
                                </div>
                                <div className="brand_img">
                                    <img src={s4} className="img-fluid" alt="brand-4" />
                                </div>
                                <div className="brand_img">
                                    <img src={s5} className="img-fluid" alt="brand-5" />
                                </div>
                                <div className="brand_img">
                                    <img src={s6} className="img-fluid" alt="brand-5" />
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Carousel.Caption>
                            <div className="d-flex align-items-center justify-content-between">
                            <div className="brand_img">
                                    <img src={s1} className="img-fluid" alt="brand-1" />
                                </div>
                                <div className="brand_img">
                                    <img src={s2} className="img-fluid" alt="brand-2" />
                                </div>
                                <div className="brand_img">
                                    <img src={s3} className="img-fluid" alt="brand-3" />
                                </div>
                                <div className="brand_img">
                                    <img src={s4} className="img-fluid" alt="brand-4" />
                                </div>
                                <div className="brand_img">
                                    <img src={s5} className="img-fluid" alt="brand-5" />
                                </div>
                                <div className="brand_img">
                                    <img src={s6} className="img-fluid" alt="brand-5" />
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Carousel.Caption>
                            <div className="d-flex align-items-center justify-content-between">
                            <div className="brand_img">
                                    <img src={s1} className="img-fluid" alt="brand-1" />
                                </div>
                                <div className="brand_img">
                                    <img src={s2} className="img-fluid" alt="brand-2" />
                                </div>
                                <div className="brand_img">
                                    <img src={s3} className="img-fluid" alt="brand-3" />
                                </div>
                                <div className="brand_img">
                                    <img src={s4} className="img-fluid" alt="brand-4" />
                                </div>
                                <div className="brand_img">
                                    <img src={s5} className="img-fluid" alt="brand-5" />
                                </div>
                                <div className="brand_img">
                                    <img src={s6} className="img-fluid" alt="brand-5" />
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Carousel.Caption>
                            <div className="d-flex align-items-center justify-content-between">
                            <div className="brand_img">
                                    <img src={s1} className="img-fluid" alt="brand-1" />
                                </div>
                                <div className="brand_img">
                                    <img src={s2} className="img-fluid" alt="brand-2" />
                                </div>
                                <div className="brand_img">
                                    <img src={s3} className="img-fluid" alt="brand-3" />
                                </div>
                                <div className="brand_img">
                                    <img src={s4} className="img-fluid" alt="brand-4" />
                                </div>
                                <div className="brand_img">
                                    <img src={s5} className="img-fluid" alt="brand-5" />
                                </div>
                                <div className="brand_img">
                                    <img src={s6} className="img-fluid" alt="brand-5" />
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </Row>
        </Container>
    </section>

    <section className="shop_section5">
        <Container>
            <Row className="align-items-center">
            <Col lg={6}>
                    <img src={shop} alt="shop" className="img-fluid e_shop" />
                </Col>
                <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
                    <h4>DMake your website more powerful</h4>
                    <p>We Design & Develop Websites that stand out of the crowd. Alea is an extremely feature rich, beautiful WordPress Template.</p>
                    
                    <table>
                        <tr>
                            <td>
                                <div>
                                    <h1> Friendly Interface</h1>
                                     <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <h1>Organized Code</h1>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.</p>
                                </div>    
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <h1>Premium Support</h1>
                                     <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <h1>powerful Options</h1>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.</p>
                                </div>    
                            </td>
                        </tr>
                    </table>

                    <div>
                    <button type="button" class="btn btn-danger">Read More ... </button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>

    </>
  )
}

export default Section2