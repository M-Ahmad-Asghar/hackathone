import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Divider from '@material-ui/core/Divider';

export default function ItemCard(props) {
    return (
        <div>
            <Container style={{ marginTop:"10px",backgroundColor: "#e6e8e6", borderRadius: "10px", margin: "5px", border: "gray 1px solid " }} >
                                <Row>
                                    <Col md={3}>
                                        <div style={{ width: "100px", height: "100px", padding:"10px"}} >
                                            <img src={props.image} alt="" style={{ width: "100px", }} />
                                        </div>

                                    </Col>
                                    <Col md={9}>
                                        <Row>
                                            <Col >
                                                <h6>Name</h6>
                                            </Col>
                                            <Col>
                                                <h6>Price</h6>

                                            </Col>
                                            <Col>
                                                <h6>Category</h6>
                                            </Col>
                                        </Row>
                                        <Divider />
                                        <Row>
                                            <Col>
                                                {props.name}
                                            </Col>
                                            <Col>
                                                {props.price}
                                            </Col>
                                            <Col>
                                                {props.category}
                                            </Col>
                                        </Row>
                                        <Divider />
                                        <Row style={{ paddingTop: "10px" }}>
                                            <Col>
                                                <button style={{ border: "none", paddingLeft: "20px", paddingRight: "20px", backgroundColor: "lightgreen" }}>View</button>
                                            </Col>
                                            <Col>
                                                <button style={{ border: "none", paddingLeft: "20px", paddingRight: "20px", backgroundColor: "lightblue" }}>Update</button>
                                            </Col>
                                            <Col>
                                                <button style={{ border: "none", paddingLeft: "20px", paddingRight: "20px", backgroundColor: "pink" }} onClick={props.delete}>Delete</button>

                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>

        </div>
    )
}
