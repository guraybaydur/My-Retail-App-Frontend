import React from 'react'
import retailLogo from '../assets/retailway.png'
import searchLogo from '../assets/searchLogo.png'
import classes from './NavBar.module.css'
import { Container, Row, Col, Form } from 'react-bootstrap'

export default function NavBar() {
    return (
        <Container>
            <Row className={classes.colStyle}>
                <Col >
                    <img src={retailLogo} alt='retailLogo' />
                </Col>
                <Col xs={5} style={{paddingRight:0}}>
                        <Form style={{ paddingTop: '25px' }}>
                            <Form.Group controlId="formBasicSearch">
                                <Form.Control type="search" placeholder="Please enter the product or brand that you're looking for" />
                            </Form.Group>
                        </Form>
                        
                </Col>
                    <img style={{width:'30',height:'43px', paddingTop:'6px'}} src={searchLogo} alt='searchLogo' />
                <Col>
                    <h3>Hello World!</h3>
                </Col>

            </Row>
        </Container>
    )
}
