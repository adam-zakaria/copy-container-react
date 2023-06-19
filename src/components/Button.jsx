import React from 'react';
import './App.css'
const Button = (props) => {
   return (
      <button className={`text-[#F824e2] btn btn--${props.kind} CTA`}
        data-id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        disabled={props.disabled}
        onClick={props.handleClick}> 
           <h4>{props.label}</h4>
      </button>
   )
}
export default Button;