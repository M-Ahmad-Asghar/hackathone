import React from 'react'
import Divider from '@material-ui/core/Divider';
import SCard from '../../components/smallCard/SCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function FeatureFoods() {
    return (
        <div>
            <Container>
            <Divider variant={"fullWidth"} />
            <h1 style={{marginLeft:"4%", fontFamily:"Poppins-Medium", fontWeight:"600", marginBottom:"50px"}}>Feature Foods</h1>
            <Row>
                <Col sm={4}>
                <SCard />
                </Col>
            </Row>
            <Divider variant={"fullWidth"} />
            
            </Container>
            
            

            
        </div>
    )
}
