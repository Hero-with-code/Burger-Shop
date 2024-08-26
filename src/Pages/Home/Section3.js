import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import {Card,CardGroup} from 'react-bootstrap'
import Logo from '../../Assets/simpleburgur.jpg';
import pannerburgur from '../../Assets/pannerburgur.jpg';
import chickenburgur from '../../Assets/chickenburgur.jpg';
import { Link } from 'react-router-dom';

function Section3() {
  return (
    <>
    <section className="menu_section3">
        <Container>
          <Row>
            <Col lg={{ span:8, offset:2}} className="text-center mb-5">
                <h2>OUR CRAGY BURGERS</h2>
                <p className='para'>Porta semper lacus, feugiat primis ultrice a ligula risus auctor</p>
            </Col>
          </Row>  
        </Container>
    </section>

    <section className='about_wrapper'>
<Container>
  <Row className="justify-content-md-center">
    <CardGroup>
      <Card>
        <Card variant="top" src="holder.js/100px160" />
        <img src={Logo} alt='Logo' height={300} />
        <Card.Body>
          <Card.Title>Burger Simple<h3 className="text-muted">$5.66</h3></Card.Title>
          <Card.Text>
          A hamburger, or simply a burger, is a dish consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll..
          </Card.Text>
        </Card.Body>
        <Card.Footer class="card text-end">
        <Link to="/" class="btn btn-primary"><i class="bi bi-bag"></i> Add To Cart</Link>
        </Card.Footer>
      </Card>

      <Card>
        <Card variant="top" src="holder.js/100px160" />
        <img src={pannerburgur} alt='Logo' height={300} />
        <Card.Body>
          <Card.Title>Burgur Paneer<h3 className="text-muted">$5.66</h3></Card.Title>
          <Card.Text>
          Paneer  burgers are a popular dish in India. The dish is made out of  paneer with a mixture of vegetables and spices wrapped in a thin bread bun and fried on the grill.
          </Card.Text>
        </Card.Body>
        <Card.Footer class="card text-end">
        <Link to="/" class="btn btn-primary"><i class="bi bi-bag"></i> Add To Cart</Link>
        </Card.Footer>
      </Card>

      <Card>
        <Card variant="top" src="holder.js/100px160" />
        <img src={chickenburgur} alt='Logo' height={300} />
        <Card.Body>
          <Card.Title>Burger Non Vage <h3 className="text-muted">$5.66</h3></Card.Title>
          <Card.Text>
          This chicken burger recipe is meant to be made on repeat with all the ingredients I try to keep stocked. Grab the meat, some fixings, and you’re good to go
          </Card.Text>
        </Card.Body>
        <Card.Footer class="card text-end">
        <Link to="/" class="btn btn-primary"><i class="bi bi-bag"></i> Add To Cart</Link>
        </Card.Footer >
      </Card>

      <Card>
        <Card variant="top" src="holder.js/100px160" />
        <img src={Logo} alt='Logo' height={300} />
        <Card.Body>
          <Card.Title>Burger Simple<h3 className="text-muted">$5.66</h3></Card.Title>
          <Card.Text>
          A hamburger, or simply a burger, is a dish consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll..
          </Card.Text>
        </Card.Body>
        <Card.Footer class="card text-end"> 
          <Link to="/" class="btn btn-primary"><i class="bi bi-bag"></i> Add To Cart</Link>
        </Card.Footer>
      </Card>

    </CardGroup>
            </Row>
        </Container>

    <Container>
  <Row className="justify-content-md-center">
    <CardGroup>
      <Card>
        <Card variant="top" src="holder.js/100px160" />
        <img src={Logo} alt='Logo' height={300} />
        <Card.Body>
          <Card.Title>Burger Simple<h3 className="text-muted">$5.66</h3></Card.Title>
          <Card.Text>
          A hamburger, or simply a burger, is a dish consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll..
          </Card.Text>
        </Card.Body>
        <Card.Footer class="card text-end">
        <Link to="/" class="btn btn-primary"><i class="bi bi-bag"></i> Add To Cart</Link>
        </Card.Footer>
      </Card>

      <Card>
        <Card variant="top" src="holder.js/100px160" />
        <img src={pannerburgur} alt='Logo' height={300} />
        <Card.Body>
          <Card.Title>Burgur Paneer<h3 className="text-muted">$5.66</h3></Card.Title>
          <Card.Text>
          Paneer  burgers are a popular dish in India. The dish is made out of  paneer with a mixture of vegetables and spices wrapped in a thin bread bun and fried on the grill.
          </Card.Text>
        </Card.Body>
        <Card.Footer class="card text-end">
        <Link to="/" class="btn btn-primary"><i class="bi bi-bag"></i> Add To Cart</Link>
        </Card.Footer>
      </Card>

      <Card>
        <Card variant="top" src="holder.js/100px160" />
        <img src={chickenburgur} alt='Logo' height={300} />
        <Card.Body>
          <Card.Title>Burger Non Vage <h3 className="text-muted">$5.66</h3></Card.Title>
          <Card.Text>
          This chicken burger recipe is meant to be made on repeat with all the ingredients I try to keep stocked. Grab the meat, some fixings, and you’re good to go
          </Card.Text>
        </Card.Body>
        <Card.Footer class="card text-end">
        <Link to="/" class="btn btn-primary"><i class="bi bi-bag"></i> Add To Cart</Link>
        </Card.Footer >
      </Card>

      <Card>
        <Card variant="top" src="holder.js/100px160" />
        <img src={Logo} alt='Logo' height={300} />
        <Card.Body>
          <Card.Title>Burger Simple<h3 className="text-muted">$5.66</h3></Card.Title>
          <Card.Text>
          A hamburger, or simply a burger, is a dish consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll..
          </Card.Text>
        </Card.Body>
        <Card.Footer class="card text-end"> 
          <Link to="/" class="btn btn-primary"><i class="bi bi-bag"></i> Add To Cart</Link>
        </Card.Footer>
      </Card>

    </CardGroup>

 </Row>

     <Row className="pt-5">
        <Col sm={5} lg={6}>
            <div className="ads_box ads_img1 mb-5 mb-md-0" id="pic_ads1">
                <h4 className='mb-0'>GET YOUR FREE</h4>
                <h5>CHEESE PRIES</h5>
                <Link to="/" className="btn btn_red px-4 rounded-0">Learn More</Link>
            </div>
            </Col>

            <Col sm={5} lg={6}>
            <div className="ads_box ads_img2" id="pic_ads2">
                <h4 className='mb-0'>GET YOUR FREE</h4>
                <h5>CHEESE PRIES</h5>
                <Link to="/" className="btn btn_red px-4 rounded-0">Learn More</Link>
            </div>
            </Col>
        </Row>

</Container>

    </section>
    </>
  )
}

export default Section3