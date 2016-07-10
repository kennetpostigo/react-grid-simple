# react-simple-grid
> Based on Bootstrap 3 Grid System

Made this because I got lazy writing classname everywhere and rather import components.

## Install
```bash
npm install react-simple-grid --save
```

## Usage

```js
import { Container, Row, Col } from 'react-simple-grid';

<Container fluid={true}>
  <Row>
    <Col type='sm' size={3}>
      <p>Waddup</p>
    </Col>
    <Col type='sm' size={3}>
      <p>Whats Poppin</p>
    </Col>
    <Col type='sm' size={3}>
      <p>Gangsta Grillz</p>
    </Col>
    <Col type='sm' size={3}>
      <p>Pimpin</p>
    </Col>
  </Row>
</Container>
```

## License
MIT
