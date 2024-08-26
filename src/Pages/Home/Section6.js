import React from 'react'
import { Container, Row, Carousel} from 'react-bootstrap'
import User1 from '../../Assets/User1.jpg'
import User2 from '../../Assets/User2.jpg'
function Section6() {
  return (
    <>
        <section className="blog_section6">
        <Container>
            <Row>
                <Carousel>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <div className="user_img">
                            <img src={User1} className="img-fluid" alt="User-1" />
                        </div>
                        <p>The buyer and the seller. The seller tries to persuade the buyer to purchase their goods or services through promotions. It helps in making the people aware of a product, service or a company.</p>
                        <div className="item_rating mb-2">
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                        </div>
                        <h5>BY AMELIE NEWLOVE</h5>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Carousel.Caption>
                        <div className="user_img">
                            <img src={User2} className="img-fluid" alt="User-2" />
                        </div>
                        <p>The buyer and the seller. The seller tries to persuade the buyer to purchase their goods or services through promotions. It helps in making the people aware of a product, service or a company.</p>
                        <div className="item_rating mb-2">
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                        </div>
                        <h5>BY AMELIE NEWLOVE</h5>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Carousel.Caption>
                        <div className="user_img">
                            <img src={User1} className="img-fluid" alt="User-3" />
                        </div>
                        <p>The buyer and the seller. The seller tries to persuade the buyer to purchase their goods or services through promotions. It helps in making the people aware of a product, service or a company.</p>
                        <div className="item_rating mb-2">
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                        </div>
                        <h5>BY AMELIE NEWLOVE</h5>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Carousel.Caption>
                        <div className="user_img">
                            <img src={User2} className="img-fluid" alt="User-4" />
                        </div>
                        <p>The buyer and the seller. The seller tries to persuade the buyer to purchase their goods or services through promotions. It helps in making the people aware of a product, service or a company.</p>
                        <div className="item_rating mb-2">
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                        </div>
                        <h5>BY AMELIE NEWLOVE</h5>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Carousel.Caption>
                        <div className="user_img">
                            <img src={User1} className="img-fluid" alt="User-5" />
                        </div>
                        <p>The buyer and the seller. The seller tries to persuade the buyer to purchase their goods or services through promotions. It helps in making the people aware of a product, service or a company.</p>
                        <div className="item_rating mb-2">
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                        </div>
                        <h5>BY AMELIE NEWLOVE</h5>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Section6