import React from 'react'
import { Container, Row, Col, Carousel} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ISO from "../../Assets/ISO.jpg"
import Android1 from "../../Assets/Android1.jpg"
import shop from "../../Assets/shop.jpg"
import s1 from "../../Assets/s1.jpg"
import s2 from "../../Assets/s2.jpg"
import s3 from "../../Assets/s3.jpg"
import s4 from "../../Assets/s4.jpg"
import s5 from "../../Assets/s5.jpg"
import s6 from "../../Assets/s6.jpg"
import s7 from "../../Assets/s7.jpg"
import s8 from "../../Assets/s8.jpg"
import s9 from "../../Assets/s9.jpg"
import s10 from "../../Assets/s10.jpg"

function Section5() {
  return (
    <>
    <section className="shop_section5">
        <Container>
            <Row className="align-items-center">
                <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
                    <h4>Download Mobile App And</h4>
                    <h2>Save up to 20%</h2>
                    <p>Aliquam a augue suscipit, luctus neque purus ipsum and neque dolor primis libero tempus, blandit varius</p>
                    <Link to="/">
                        <img src={ISO} alt="IOS" className="img-fluid store me-3" />
                    </Link>
                    <Link to="/">
                        <img src={Android1} alt="Android" className="img-fluid store me-3" />
                    </Link>
                </Col>
                <Col lg={6}>
                    <img src={shop} alt="shop" className="img-fluid e_shop" />
                </Col>
            </Row>
        </Container>
    </section>

    <section className="brand_section5">
        <Container>
            <Row>
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
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Carousel.Caption>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="brand_img">
                                    <img src={s6} className="img-fluid" alt="brand-6" />
                                </div>
                                <div className="brand_img">
                                    <img src={s7} className="img-fluid" alt="brand-7" />
                                </div>
                                <div className="brand_img">
                                    <img src={s8} className="img-fluid" alt="brand-8" />
                                </div>
                                <div className="brand_img">
                                    <img src={s9} className="img-fluid" alt="brand-9" />
                                </div>
                                <div className="brand_img">
                                    <img src={s10} className="img-fluid" alt="brand-10" />
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
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Carousel.Caption>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="brand_img">
                                    <img src={s6} className="img-fluid" alt="brand-6" />
                                </div>
                                <div className="brand_img">
                                    <img src={s7} className="img-fluid" alt="brand-7" />
                                </div>
                                <div className="brand_img">
                                    <img src={s8} className="img-fluid" alt="brand-8" />
                                </div>
                                <div className="brand_img">
                                    <img src={s9} className="img-fluid" alt="brand-9" />
                                </div>
                                <div className="brand_img">
                                    <img src={s10} className="img-fluid" alt="brand-10" />
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Section5