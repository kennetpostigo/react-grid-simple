# react-grid-simple
> Based on Bootstrap 3 Grid System

Made this because I got lazy writing classname everywhere and rather import components.

## Install
```bash
npm install react-simple-grid --save
```

Make sure to import the styles for the grid system. It is essentially just Bootstraps grid system.
So if you have bootstrap already on your project you don't need the css from `react-grid-simple`.
```html
<link rel="stylesheet" href="/node_modules/react-grid-simple/src/css/grid.min.css">
```
## Usage
```js
import { Container, Row, Col } from 'react-grid-simple';

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
