import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';


export default function SCard(props) {
    return (
      <div style={{marginTop:"30px",}}>
            <Container fixed maxWidth={'xs'} >
            <Paper elevation={8} maxWidth={'md'}>
                <Card style={{ width: '18rem',  border: "none", }} >
                    <Card.Img variant="top" src="/sl2.jpg" />
                    <Card.Body>
                        <div style={{display:"flex", flex:1}}>
                        <Card.Title style={{display:"flex", flex:3, fontFamily:"roboto"}}>{props.title}</Card.Title>
                        <h5 style={{display:"flex", flex:1, fontFamily:"roboto"}}>{props.price}</h5>
                        </div>
                        <Card.Text sryle={{ fontFamily:"roboto"}}>{props.category}</Card.Text>
                        <div >
                        <p style={{ maxHeight:"90px",overflow:"scroll"}}>
                        
                         {props.details}
                        </p>
                        </div>
                        <Button variant="primary" style={{width:"100%"}}>Order Now!</Button>
                    </Card.Body>
                </Card>
            </Paper>
        </Container>
      </div>


    )
}
