import React from 'react'
import './InfoCard.css'

const InfoCard = (props)=>(
    <div className='card-info'>
       {props.children}
    </div>
)

export default InfoCard;