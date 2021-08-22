import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';


export default function Card1(props) {
    return (
      
           <Container fixed maxWidth={'md'} >
               <Paper elevation={8}>
            <Card className="bg-dark text-white" bg={'light'} style={{border:"none"}}>
  <Card.Img src="/sl1.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>{props.title}</Card.Title>
  </Card.ImgOverlay>
</Card>
</Paper>
       </Container>
      
    )
}
