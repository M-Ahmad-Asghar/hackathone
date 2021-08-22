import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
 import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Carousel } from 'react-responsive-carousel';
export default function Carousel1() {
    return (
        <Carousel >
                <div style={{height:'450px', }}>
                    <img src="/sl1.jpg"  />
                    <p className="legend">Taste Your favourit food </p>
                </div>
                <div style={{display:"block",height:'10px'}}>
                    <img src="/sl2.jpg"  />
                    <p className="legend">Fast Foods</p>
                </div >
                <div style={{display:"block",height:'10px'}}>
                    <img src="/sl3.jpg"  />
                    <p className="legend">Natural</p>
                </div>
            </Carousel>
    )
}
