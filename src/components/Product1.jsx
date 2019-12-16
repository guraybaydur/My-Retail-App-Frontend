import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import iphoneImage from '../assets/iphone11.png'

export default class Product1 extends Component {
    
    productCardStyle={ width: '100%' ,height:'75vh'}
    cardBodyStyle={display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center'}
    imgStyle={height:'60%',width:'90%'}

    render() {
        return (
            <Container style={{ marginTop: '10px',height:'100vh' }}>
                <Row>
                    <Col>
                        <Card style={this.productCardStyle}>
                            <Card.Body style={this.cardBodyStyle}>
                                <Card.Title>iPhone 11</Card.Title>
                                <Card.Subtitle>Technical Details</Card.Subtitle>
                                <Card.Subtitle>Technical Details</Card.Subtitle>
                                <Card.Subtitle>Technical Details</Card.Subtitle>
                                <Card.Img style={this.imgStyle} variant="top" src={iphoneImage} />
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>

                    </Col>
                    <Col>

                    </Col>
                </Row>
            </Container>
        )
    }
}
