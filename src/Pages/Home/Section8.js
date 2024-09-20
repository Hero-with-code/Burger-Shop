import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import a1 from "../../Assets/agency-blog1.jpg"
import a2 from "../../Assets/agency-blog2.jpg"
import a3 from "../../Assets/agency-blog3.jpg"

function Section8() {
  return (
    <>
    <section className="section8 main-section8">
        <Container>
          <Row>
            <Col className="text-center pt-5">
                <h2>Latest News</h2>
                <p className='para'>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra<br /> maecenas accumsan lacus vel facilisis.</p>
            </Col>
          </Row>  
        </Container>
    </section>

    <section className="section8"> 
    <div class="row row-cols-1 row-cols-md-3 g-3 containers-div">
  <div class="col cards123">
    <div class="card h-100">
      <img src={a1} class="card-img-top" alt="..." />
      <div class="card-body">
        <h3 class="card-title">How to Document Processes to Scale Your Agency</h3>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button type="button" class="btn btn-secondary mt-3">Read More</button>
      </div>
    </div>
  </div>
  <div class="col cards123">
    <div class="card h-100">
      <img src={a2} class="card-img-top" alt="..." />
      <div class="card-body">
        <h3 class="card-title">15 Employee Feedback Tools to Track Your Team</h3>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button type="button" class="btn btn-secondary mt-3">Read More</button>
      </div>
    </div>
  </div>
  <div class="col cards123">
    <div class="card h-100">
      <img src={a3} class="card-img-top" alt="..." />
      <div class="card-body">
        <h3 class="card-title">12 Tried-and-True Ways to Improve User</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button type="button" class="btn btn-secondary mt-3">Read More</button>
      </div>
    </div>
  </div>
</div>
    </section>
    </>
  )
}

export default Section8