import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';


export default function SCard() {
    return (
      <div style={{marginTop:"30px"}}>
            <Container fixed maxWidth={'xs'} >
            <Paper elevation={8} maxWidth={'md'}>
                <Card style={{ width: '18rem' }} style={{ border: "none" }}>
                    <Card.Img variant="top" src="/sl2.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Paper>
        </Container>
      </div>


    )
}
