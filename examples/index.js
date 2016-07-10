import React from 'react';
import { render } from 'react-dom';
import { Container, Row, Col } from './../dist/react-grid-simple.min.js';

function App (props) {
  return (
    <Container fluid={true}>
      <Row>
        <Col xs={3}sm={3}lg={5} md={9}>
          <p>Waddup</p>
        </Col>
        <Col xs={2}sm={3}lg={1} md={1}>
          <p>Whats Poppin</p>
        </Col>
        <Col xs={2}sm={3}lg={5} md={1}>
          <p>Gangsta Grillz</p>
        </Col>
        <Col xs={5}sm={3}lg={1} md={1}>
          <p>Pimpin</p>
        </Col>
      </Row>
    </Container>
  );
}

render(<App />, document.getElementById('app'));
