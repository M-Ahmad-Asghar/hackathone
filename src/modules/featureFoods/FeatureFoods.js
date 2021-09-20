import React from 'react'
import Divider from '@material-ui/core/Divider';
import SCard from '../../components/smallCard/SCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { fetchFood } from '../../store/actions/FoodAction';

export default function FeatureFoods() {
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(fetchFood(setLoading))
    }, [])
    console.log('loading at feature food',loading);
    const foods = useSelector(state => state.foodReducer.food)
    console.log('Foods, at feature food',foods);
    
    return (
        <div>

            <Container>
            <h1 style={{marginLeft:"4%", fontFamily:"Poppins-Medium", fontWeight:"600", marginBottom:"50px"}}>Feature Foods</h1>
            <Row>  {
                foods.map((item, index) => {
                    return  <Col sm={4} >
                    <SCard title={item.fdName} price={item.fPrice} category={item.fCategory}
                    details={item.fdDetails} image={item.fdPic}
                    />
                    </Col>  
                   
                                        
                })
            } </Row>

            {loading && <div>Loading....</div>}
           
            
            </Container>
            
            

            
        </div>
    )
}
