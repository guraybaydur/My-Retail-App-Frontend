import React from 'react';
import { Row, Col } from 'react-bootstrap';
import electronicsImage from '../assets/electronics1.jpg'




const MainSectionImage = (props) => {



    return (
            <Row style={{ height: '340px', marginTop: '10px' }}>
                    <Col>
                        <img onClick={()=> props.imgClick(1)} style={{ width: '100%', height: '90%' }} src={electronicsImage} alt='retailLogo' />
                    </Col>
            </Row>
    );
}

export default MainSectionImage;
