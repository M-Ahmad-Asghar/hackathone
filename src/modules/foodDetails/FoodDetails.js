import {React, useState} from 'react'
import Divider from '@material-ui/core/Divider';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from '@material-ui/core/Button';
import EmojiEmotionsSharpIcon from '@material-ui/icons/EmojiEmotionsSharp';

export default function FoodDetails() {
    const [i, seti] = useState(0)
    const ctaPlus = ()=>{
      return seti(i+1) 
    }
    const ctaMinus = ()=>{
        return seti(i-1) 
      }
      let amount=200
    return (
        <div>
            <Container >
                <Row>
                    <Col sm={8}>
                    <img src="/sl2.jpg" style={{width:'100%'}}/>
                    </Col>
                    <Col sm={4}>
                    <h3>Food Name</h3>
                    <p style={{backgroundColor:"#edebeb"}}>Biryani</p>
                    <h5>Quantity</h5>
                    <button style={{display:"inline",border:"none"}}onClick={ctaMinus} >-</button>
                    <input style={{width:"30px",height:"30px",marginBottom:"20px", marginLeft:"10px"}} value={i}/>
                    <button style={{display:"inline",border:"none"}} onClick={ctaPlus}>+</button> 
                    <h3>Amount</h3>
                    <input style={{width:"70px",height:"30px",marginBottom:"20px", marginLeft:"10px"}} value={amount*i}/>
                    <br />
                    <br />
                    <Button style={{width:"100%"}}
        variant="contained"
        color="primary"
        startIcon={<EmojiEmotionsSharpIcon />}
      >
        Order Now!
      </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
