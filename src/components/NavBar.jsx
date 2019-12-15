import React from 'react'
import retailLogo from '../assets/retailway.png'
import searchLogo from '../assets/searchLogo.png'
import classes from './NavBar.module.css'
import { Container, Row, Col, Form, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import electronicsImage from '../assets/electronics1.jpg'
import supermarketImage from '../assets/supermarket.jpg'
import clothingImage from '../assets/clothing3.jpg'

export default function NavBar() {
    return (
        <Container>
            <Row className={classes.colStyle}>
                <Col >
                    <img src={retailLogo} alt='retailLogo' />
                </Col>
                <Col xs={5} style={{ paddingRight: 0 }}>
                    <Form style={{ paddingTop: '20px' }}>
                        <Form.Group controlId="formBasicSearch">
                            <Form.Control type="search" placeholder="Please enter the product or brand that you're looking for" />
                        </Form.Group>
                    </Form>

                </Col>
                <img style={{ width: '30', height: '43px', paddingTop: '3px', paddingBottom: '2px' }} src={searchLogo} alt='searchLogo' />
                <Col style={{ paddingTop: '50px' }}>
                    <Row className={classes.colStyle}>
                        <Col xs={{ offset: 2, span: 4 }}>
                            <FontAwesomeIcon style={{ width: '90px', height: '30px' }} icon={faUser} />
                        </Col>
                        <Col xs={{ offset: 0, span: 4 }}>
                            <FontAwesomeIcon style={{ width: '90px', height: '30px' }} icon={faShoppingCart} />
                        </Col>
                    </Row>
                    <Row className={classes.colStyle}>
                        <Col xs={{ offset: 2, span: 4 }}>
                            <p style={{ width: '90px' }}>Login</p>
                        </Col>
                        <Col xs={{ offset: 0, span: 4 }}>
                            <p style={{ width: '120px', paddingRight: '18px' }}>Shopping Cart</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Navbar style={{ display: 'flex', justifyContent: 'space-between' }} bg="light" variant="light">
                        <Navbar.Brand href="#Woman">Woman</Navbar.Brand>
                        <Navbar.Brand href="#Man">Man</Navbar.Brand>
                        <Navbar.Brand href="#Kid">Kid</Navbar.Brand>
                        <Navbar.Brand href="#Shoes&Cases">Shoes&Cases</Navbar.Brand>
                        <Navbar.Brand href="#Clocks&Accessories">Clocks&Accessories</Navbar.Brand>
                        <Navbar.Brand href="#Cosmetics">Cosmetics</Navbar.Brand>
                        <Navbar.Brand href="#Home&Life">Home&Life</Navbar.Brand>
                        <Navbar.Brand href="#Electronics">Electronics</Navbar.Brand>
                        <Navbar.Brand href="#Supermarket">Supermarket</Navbar.Brand>
                    </Navbar>
                </Col>
            </Row>
            <Row style={{height:'340px',marginTop:'10px'}}>
                <Col>
                    <img style={{width:'100%', height:'90%'}} src={electronicsImage} alt='retailLogo' />
                </Col>
            </Row>
            <Row style={{height:'415px'}}>
                <Col>
                    <img style={{width:'100%', height:'70%'}} src={supermarketImage} alt='retailLogo' />
                </Col>
            </Row>
            <Row>
                <Col>
                    <img style={{width:'100%', height:'100%'}} src={clothingImage} alt='retailLogo' />
                </Col>
            </Row>
        </Container>
    )
}
