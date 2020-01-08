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

    imgStyle={ padding:'15px',border:'2px solid #E2E2E2',height:'400px',width:'100%',objectFit:'contain'} ;
    rowStyle={ marginBottom:'10px'};
    
    render() {
        return (
            <Container>
                <MainSectionImage imgClick={this.imageClicked}/>
                <Row style={this.rowStyle}>
                    <Col>
                        <img style={this.imgStyle} src={supermarketImage} alt='retailLogo' />
                    </Col>
                </Row>
                <Row style={this.rowStyle}>
                    <Col>
                        <img style={this.imgStyle} src={clothingImage} alt='retailLogo' />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default withRouter(MainSection);