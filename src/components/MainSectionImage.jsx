import React from 'react';
import { Row, Col } from 'react-bootstrap';
import electronicsImage from '../assets/electronics1.jpg'

const MainSectionImage = (props) => {
    return (
        <Row style={{ marginBottom:'10px'}}>
            <Col>
                <img onClick={() => props.imgClick(1)} style={{ padding:'15px',border:'2px solid #E2E2E2',height:'400px',width:'100%',objectFit:'contain'}} src={electronicsImage} alt='retailLogo' />
            </Col>
        </Row>
    );
}

export default MainSectionImage;
