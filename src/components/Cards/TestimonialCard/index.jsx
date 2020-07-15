import React from 'react'
import './TestimonialCard.css'
const TestimonialCard = (props) =>(
    <div className='card-testimonial'>
             {props.children}
          <div className="user-info">
            <img className="user-photo" src={props.userPhoto} alt="Logo" />
            <p className="user-name">{props.userName}</p>
            <p className="user-job">{props.jobTitle}</p>
          </div>
        </div>
);

export default TestimonialCard;