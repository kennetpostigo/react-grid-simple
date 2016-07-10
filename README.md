# react-grid-simple
> Based on Bootstrap 3 Grid System

[![version](https://img.shields.io/npm/v/react-grid-simple.svg?style=flat-square)](http://npm.im/react-grid-simple)
[![downloads](https://img.shields.io/npm/dm/react-grid-simple.svg?style=flat-square)](http://npm-stat.com/charts.html?package=react-grid-simple&from=2016-06-13)
[![MIT License](https://img.shields.io/npm/l/react-grid-simple.svg?style=flat-square)](http://opensource.org/licenses/MIT)

Made this because I got tired of looking at divs everywhere and looking for classNames.

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
```

## License
MIT
