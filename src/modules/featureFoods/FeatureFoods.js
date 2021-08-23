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
        console.log("call the action in custom hook for fetching setudents from firebase");
        dispatch(fetchFood(setLoading))
        }, [])
    const foods = useSelector(state => state.foodReducer.food)
    console.log('foods at featurw food',foods);
    return (
        <div>
            <Container>
            <h1 style={{marginLeft:"4%", fontFamily:"Poppins-Medium", fontWeight:"600", marginBottom:"50px"}}>Feature Foods</h1>
            {
                foods.map((item, index) => {
                    return   <div>
                    <Row>
                        <Col sm={4}>
                        <SCard title={item.fName} price={item.fPrice} category={item.fCategory}
                        details={item.fDetails}
                        />
                        </Col>
                    </Row>
                    <Divider  />
                    </div>
                                        
                })
            }

            {loading && <div>Loading....</div>}
           
            
            </Container>
            
            

            
        </div>
    )
}
