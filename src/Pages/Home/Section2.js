import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { Link} from 'react-router-dom'
import {Card,CardGroup} from 'react-bootstrap'
import Logo from '../../Assets/simpleburgur.jpg';
import pannerburgur from '../../Assets/pannerburgur.jpg';
import chickenburgur from '../../Assets/chickenburgur.jpg';

function Section2() {
  return (
    <>
    <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span:8, offset:2}} className="text-center">
                <h2>The burgur testes better when you eat it with your family</h2>
                <p>Porta semper lacus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lecinia cubilia curae intwgwr orci congue and metus integer primis in integer metus</p>

                <Link to="/" className="btn order_now btn_red">Explore Full Menu</Link>
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
          <Card.Title>Burger Simple</Card.Title>
          <Card.Text>
          A hamburger, or simply a burger, is a dish consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll..
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">A Few Second Ago.</small>
        </Card.Footer>
      </Card>

      <Card>
        <Card variant="top" src="holder.js/100px160" />
        <img src={pannerburgur} alt='Logo' height={300} />
        <Card.Body>
          <Card.Title>Burgur Paneer</Card.Title>
          <Card.Text>
          Paneer  burgers are a popular dish in India. The dish is made out of  paneer with a mixture of vegetables and spices wrapped in a thin bread bun and fried on the grill.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">A Few Second Ago.</small>
        </Card.Footer>
      </Card>
      
      <Card>
        <Card variant="top" src="holder.js/100px160" />
        <img src={chickenburgur} alt='Logo' height={300} />
        <Card.Body>
          <Card.Title>Burger Non Vage</Card.Title>
          <Card.Text>
          This chicken burger recipe is meant to be made on repeat with all the ingredients I try to keep stocked. Grab the meat, some fixings, and you’re good to go
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">A Few Second Ago.</small>
        </Card.Footer>
      </Card>
    </CardGroup>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Section2