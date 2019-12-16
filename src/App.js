import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import electronicsImage from './assets/electronics1.jpg'
import supermarketImage from './assets/supermarket.jpg'
import clothingImage from './assets/clothing3.jpg'
import { Container, Row, Col, Form, Navbar } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <head>
        <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap" rel="stylesheet"></link>
      </head>
      <NavBar />
      <Container>
        <Row style={{ height: '340px', marginTop: '10px' }}>
          <Col>
            <img style={{ width: '100%', height: '90%' }} src={electronicsImage} alt='retailLogo' />
          </Col>
        </Row>
        <Row style={{ height: '445px' }}>
          <Col>
            <img style={{ width: '100%', height: '75%' }} src={supermarketImage} alt='retailLogo' />
          </Col>
        </Row>
        <Row>
          <Col>
            <img style={{ width: '100%', height: '100%' }} src={clothingImage} alt='retailLogo' />
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
