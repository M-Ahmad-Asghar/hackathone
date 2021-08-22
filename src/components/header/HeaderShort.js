import React from 'react'
import Header from './Header'

export default function HeaderShort() {
    return (
        <div>
             <Header 
               title={'/zFood-Logo.PNG'}
               sections={[{title:"Register Your Restaurant",url:"./home"},
               {title:"Category",url:"/"},
               {title:"Category",url:"/"},
               {title:"Category",url:"/"},
               {title:"Category",url:"/"},
               {title:"Category",url:"/"},
               {title:"Category",url:"/"},
               {title:"Category",url:"/"},
               {title:"Category",url:"/"},
               {title:"Category",url:"/"},
               {title:"Category",url:"/"},
               {title:"Category",url:"/"},
            ]}
               />
        </div>
    )
}
