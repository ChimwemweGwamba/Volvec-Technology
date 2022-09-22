import React from 'react'
import './button.css'


function Button(props) {
  return (
    <div  className='buttonContainer'>
        <button>{props.buttonText}</button>
    </div>
  )
}

export default Button