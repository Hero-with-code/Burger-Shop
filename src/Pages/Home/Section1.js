import React from 'react'
import { Container } from 'react-bootstrap'


function Section1() {
  return (
    <section className="hero_section">
      <Container>
        <section className="bg_parallax_scroll"> </section>
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button"></button>
                </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <div class="carousel-caption d-none d-md-block">
                            <h1>Ultimate Platform to monitor<br /> your best workflow.</h1>
                        <p>It should be noted that although application software is thought of<br /> as a program, it can be anything that runs on a computer.</p>
                    <button type="button" class="btn btn-primary btn1">Get Started</button>
                <button type="button" class="btn btn-secondary btn1">Watch</button>
            </div>
        </div>
      </div>  
</div>
      </Container>  
    </section>
  )
}

export default Section1