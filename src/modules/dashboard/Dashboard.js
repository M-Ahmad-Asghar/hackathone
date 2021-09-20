import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Divider from '@material-ui/core/Divider';
import ItemCard from '../../components/itemCard/ItemCard';
import OrderCard from '../../components/itemCard/orderCard/OrderCard';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { fetchFood, delFood } from '../../store/actions/FoodAction';
import {currentUserId, authStateChk} from '../../store/actions/AuthAction'
import { Link } from 'react-router-dom';
 
export default function Dashboard() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    
    useEffect(() => {
       dispatch(fetchFood(setLoading))
    }, [])
    
    const foods = useSelector(state => state.foodReducer.food)
    console.log('foods at featurw food',foods);
    

    return (
        <Container>
            <br />
            <Link to="/addfood" style={{textDecoration:"none"}} >
            <h2 style={{padding:"10px",paddingLeft:"30px",paddingRight:"50px", backgroundColor:"blueviolet", color:"white", display:"inline", borderRadius:"30px" }}>Add Item +</h2>

            </Link>
            <br /><br /><br />
            <h1 style={{ fontFamily: "roboto" }}>Dashboard</h1>
            <br />
            <div>
                <Row>
                    <Col sm={12} md={6}>
                        <h2>Items</h2>
                        <Container style={{ backgroundColor: "#d7dbd8", borderRadius: "10px", padding: "10px", }}>
                         {
                foods.map((item, index) => {
                    return   <div> 
                    <ItemCard delete = {()=> dispatch(delFood(item.docID, setLoading))} name={item.fdName} price={item.fPrice} category={item.fCategory} image={item.fdPic}/>
                     <Divider />
                     <Divider />
                     <Divider />
                     <Divider />
                    </div>
                   
                                        
                })
            } 
            {loading?loading && <div>Loading....</div>:foods.length<=0 &&<p style={{color:'red'}}>No Items Added!</p>}
     

                        </Container>

                    </Col>
                    <Col sm={12} md={6}>
                        <h2>Orders</h2>
                        <Container style={{ backgroundColor: "#d7dbd8", borderRadius: "10px", padding: "10px", }}>
                        {
                foods.map((item, index) => {
                    return   <div> 
                    <OrderCard delete = {()=> dispatch(delFood(item.docID, setLoading))} name={item.fdName} price={item.fPrice} category={item.fCategory} image={item.fdPic}/>
                     <Divider />
                     <Divider />
                     <Divider />
                     <Divider />
                    </div>
                   
                                        
                })
            } 
            {loading?loading && <div>Loading....</div>:foods.length<=0 &&<p style={{color:'red'}}>No Orders!</p>}

                        </Container>

                    </Col>
                </Row>
            </div>
        </Container>
    )
}
