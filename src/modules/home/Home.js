import React from 'react'
import Card1 from '../../components/card/Card';
import Carousel1 from '../../components/crousel/Crousel';
import Divider from '@material-ui/core/Divider';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { fetchRecord } from '../../store/actions/Actions';
export default function Home() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("call the action in custom hook for fetching setudents from firebase");
        dispatch(fetchRecord(setLoading))
        }, [])
    const stores = useSelector(state => state.reducer.records)
    console.log('stores at home',stores);


    return (
        <div>
            {/* <Carousel1 /> */}
            <Divider variant={"fullWidth"} />
            <h1 style={{marginLeft:"15%", fontFamily:"Poppins-Medium", fontWeight:"600", marginBottom:"50px"}}>Best Restaurants</h1>
            <Divider variant={"fullWidth"} />
            {
                stores.map((item, index) => {
                    return              <Card1 title={item.name} imageUrl={item.image}/>
                                        
                })
            }

            {loading && <div>Loading....</div>}
        </div>
    )
}
