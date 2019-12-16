import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

export default class Electronics extends Component {

    myStyle = { marginBottom: '10px' }
    myStyle2 = { height: '300px' }
    myStyle3={display:'flex', flexDirection:'column', justifyContent:'space-between'}
    render() {
        return (
            <Container style={{ marginTop: '10px' }}>
                <Row style={this.myStyle}>
                    <Col>
                        <Card style={this.myStyle2}>
                            
                            <Card.Body style={this.myStyle3}>
                                <Card.Title>iPhone 11</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={this.myStyle2}>
                            
                            <Card.Body style={this.myStyle3}>
                                <Card.Title>MacBook Pro</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={this.myStyle2}>
                            
                            <Card.Body style={this.myStyle3}>
                                <Card.Title>JBL Headphone</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={this.myStyle}>
                    <Col>
                        <Card style={this.myStyle2}>
                            
                            <Card.Body style={this.myStyle3}>
                                <Card.Title>NBA 2K20</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={this.myStyle2}>
                            
                            <Card.Body style={this.myStyle3}>
                                <Card.Title>Refrigerator</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={this.myStyle2}>
                            <Card.Body style={this.myStyle3}>
                                <Card.Title>Hair Dryer</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
