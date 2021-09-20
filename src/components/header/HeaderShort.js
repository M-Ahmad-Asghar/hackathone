import React from 'react'
import Header from './Header'

export default function HeaderShort() {
    const options = [
        'Home',
        'Register Your Restaurant',
        'Dashboard',
        'Karachi',
        'Punjabi',
        'Pakistani',
        'Desi',
        'Chines',
        'Fast Food',
        'Continental',
        'Indian',
        'Dhaba Style',
        'Organic',
    ];
    const optionsLink = [
        './home',
        './registerstore',
        './dashboard',
        './Karachi',
        './Punjabi',
        './Pakistani',
        './Desi',
        './Chines',
        './FastFood',
        './Continental',
        './Indian',
        './DhabaStyle',
        './Organic',
    ];
    return (
        <div>
            <Header
                title={'/zFood-Logo.PNG'}
                sections={
                    options.map((item, index) => (
                        { title: item, url: optionsLink[index] }
                    ))}/>
        </div>
    )}
// [{title:"Register Your Restaurant",url:"./home"},