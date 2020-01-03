import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import iphoneImage from '../assets/iphone11.png'
import axios from 'axios';

export default class Product1 extends Component {

    productCardStyle = { width: '100%', height: '75vh' }
    cardBodyStyle = { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }
    imgStyle = { height: '60%', width: '90%' }
    //divStyle={height:'30px',width:'30px'}

    sendRequest = () => {
        axios(
            {
                method: 'get',
                url: 'http://localhost:3001/url',
                //headers: {'Access-Control-Allow-Origin':'*'}
            }
        ).then((res)=>{
            console.log(res.data)
        });
    }

    render() {
        return (
            <Container style={{ marginTop: '10px', height: '100vh' }}>
                <Row>
                    <Col>
                        <Card style={this.productCardStyle}>
                            <Card.Body style={this.cardBodyStyle}>
                                <Card.Title style={{ marginBottom: '30px' }}>iPhone 11</Card.Title>
                                <Card.Subtitle style={{ marginBottom: '10px' }}>Technical Details</Card.Subtitle>
                                    <div style={{ textAlign: 'left' }}>Capacity: 64GB</div>
                                    <div style={{ textAlign: 'left' }}>Chip: A13 Bionic chip</div>
                                    <div style={{ textAlign: 'left' }}>Camera: Dual 12MP Ultra Wide</div>
                                <Card.Img style={this.imgStyle} variant="top" src={iphoneImage} />
                                <Card.Title>$699</Card.Title>
                                <Button onClick={this.sendRequest} variant="warning">Proceed to Shopping Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={this.productCardStyle}>
                            <Card.Body style={this.cardBodyStyle}>
                                <Card.Title style={{ marginBottom: '30px' }}>iPhone 11</Card.Title>
                                <Card.Subtitle style={{ marginBottom: '10px' }}>Technical Details</Card.Subtitle>
                                    <div style={{ textAlign: 'left' }}>Capacity: 64GB</div>
                                    <div style={{ textAlign: 'left' }}>Chip: A13 Bionic chip</div>
                                    <div style={{ textAlign: 'left' }}>Camera: Dual 12MP Ultra Wide</div>
                                <Card.Img style={this.imgStyle} variant="top" src={iphoneImage} />
                                <Card.Title>$699</Card.Title>
                                <Button variant="warning">Proceed to Shopping Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={this.productCardStyle}>
                            <Card.Body style={this.cardBodyStyle}>
                                <Card.Title style={{ marginBottom: '30px' }}>iPhone 11</Card.Title>
                                <Card.Subtitle style={{ marginBottom: '10px' }}>Technical Details</Card.Subtitle>
                                    <div style={{ textAlign: 'left' }}>Capacity: 64GB</div>
                                    <div style={{ textAlign: 'left' }}>Chip: A13 Bionic chip</div>
                                    <div style={{ textAlign: 'left' }}>Camera: Dual 12MP Ultra Wide</div>
                                <Card.Img style={this.imgStyle} variant="top" src={iphoneImage} />
                                <Card.Title>$699</Card.Title>
                                <Button variant="warning">Proceed to Shopping Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
