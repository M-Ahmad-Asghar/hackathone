import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

export default function Card1(props) {
    return (
      
           <Container fixed maxWidth={'md'} style={{marginTop:"30px",}  }>
               <Paper elevation={8}>
            <Card className="bg-dark text-white" bg={'light'} style={{border:"none"}}>
  <Card.Img src={props.imageUrl} alt="Card image" style={{maxHeight:"400px",  }} />
  <Card.ImgOverlay>
    <Card.Title style={{backgroundColor:"gray", display:"inline", padding:"10px", borderRadius:"20px"}}>{props.title}</Card.Title>
  </Card.ImgOverlay>
  
</Card>
</Paper>
<Divider style={{marginTop:"10px"}}/>
       </Container>
      
    )
}
