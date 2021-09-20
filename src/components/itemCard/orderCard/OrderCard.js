import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Divider from '@material-ui/core/Divider';

export default function OrderCard(props) {
    var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
    return (
        <div>
             <Container style={{ backgroundColor: "#e6e8e6", borderRadius: "10px", margin: "5px", border: "gray 1px solid " }} >
                                <Row>
                                    <Col md={3}>
                                        <div style={{ width: "100px", height: "100px", overflow: "hidden", paddingTop: "30px" }} >
                                            <img src={props.image} alt="" style={{ width: "100px", }} />
                                        </div>

                                    </Col>
                                    <Col md={9}>
                                        <Row>
                                            <Col >
                                                <h6>Name</h6>
                                            </Col>
                                            <Col>
                                                <h6>Qn#</h6>

                                            </Col>
                                            <Col>
                                                <h6>Total Amount</h6>
                                            </Col>
                                        </Row>
                                        <Divider />
                                        <Row>
                                            <Col>
                                                {props.name}
                                            </Col>
                                            <Col>
                                                {props.qn}
                                            </Col>
                                            <Col>
                                                {`${props.price}-PKR`}
                                            </Col>
                                        </Row>
                                        <Divider />
                                        <Row style={{ paddingTop: "10px" }}>
                                            <Col>
                                                <button style={{ border: "none", paddingLeft: "20px", paddingRight: "20px", backgroundColor: "lightgreen" }}>Accept</button>
                                            </Col>
                                                <Col>
                                                <button style={{ border: "none", paddingLeft: "20px", paddingRight: "20px", backgroundColor: "pink" }}>Reject</button>

                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>

        </div>
    )
}
