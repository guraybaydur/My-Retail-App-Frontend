import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import supermarketImage from '../assets/supermarket.jpg'
import clothingImage from '../assets/clothing3.jpg'
import { withRouter } from 'react-router-dom'
import MainSectionImage from './MainSectionImage'

class MainSection extends Component {
    
    imageClicked = (imgNum) => {
        if(imgNum === 1){
            console.log('image clicked!')
            this.props.history.push('/electronics');
        }
    };
    
    render() {
        return (
            <Container>
                <MainSectionImage imgClick={this.imageClicked}/>
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
        )
    }
}

export default withRouter(MainSection);