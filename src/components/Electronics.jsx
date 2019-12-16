import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import iphoneImage from '../assets/iphone11.jpeg'
import macbookImage from '../assets/macbookpro.png'
import jblImage from '../assets/jbl.jpg'
import image2k from '../assets/2k.jpeg'
import vrImage from '../assets/vr.jpeg'
import dryerImage from '../assets/dryer.jpg'



export default class Electronics extends Component {

    myStyle = { marginBottom: '10px' }
    myStyle2 = { height: '300px' }
    myStyle3={display:'flex', flexDirection:'column', justifyContent:'space-around',alignItems:'center'}
    imgStyle={height:'50%',width:'40%'}
    imgStyle2={height:'50%',width:'30%'}
    imgStyle3={height:'50%',width:'40%'}
    imgStyle4={height:'70%',width:'50%'}
    buttonStyle={marginTop:'40px'}
    render() {
        return (
            <Container style={{ marginTop: '10px' }}>
                <Row style={this.myStyle}>
                    <Col>
                        <Card style={this.myStyle2}> 
                            <Card.Body style={this.myStyle3}>
                                <Card.Title>iPhone 11</Card.Title>
                                <Card.Img style={this.imgStyle} variant="top" src={iphoneImage} />
                                <Button variant="primary">Buy One From $699</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={this.myStyle2}>
                            <Card.Body style={this.myStyle3}>
                                <Card.Title>MacBook Pro 13 inch</Card.Title>
                                <Card.Img style={this.imgStyle} variant="top" src={macbookImage} />
                                <Button variant="primary">Buy One From $5,999</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={this.myStyle2}>
                            <Card.Body style={this.myStyle3}>
                                <Card.Title>JBL Headphones</Card.Title>
                                <Card.Img style={this.imgStyle2} variant="top" src={jblImage} />
                                <Button variant="primary">Buy One From $129,95</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={this.myStyle}>
                    <Col>
                        <Card style={this.myStyle2}>
                            <Card.Body style={this.myStyle3}>
                                <Card.Title>NBA 2K20</Card.Title>
                                <Card.Img style={this.imgStyle3} variant="top" src={image2k} />
                                <Button style={this.buttonStyle} variant="primary">Buy One From $29,99</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={this.myStyle2}>
                            <Card.Body style={this.myStyle3}>
                                <Card.Title>VR Headset</Card.Title>
                                <Card.Img style={this.imgStyle4} variant="top" src={vrImage} />
                                <Button variant="primary">Buy One From $599</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={this.myStyle2}>
                            <Card.Body style={this.myStyle3}>
                                <Card.Title>Hair Dryer</Card.Title>
                                <Card.Img style={this.imgStyle3} variant="top" src={dryerImage} />   
                                <Button style={this.buttonStyle} variant="primary">Buy One From $56,99</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
