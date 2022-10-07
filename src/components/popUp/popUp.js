import React from 'react'
import './popUp.css'
import pop from '../../assets/images/progressive_app.svg';
import check from '../../assets/images/check.png';


function PopUp(props) {
  return (
    <div className='popUpContainer'>
        
        <div className='close'>
            <button onClick={() => props.closePopUp(false)}>
                X
            </button>
        </div>
        
        <div className='popUpContent'>
            <div className='popUpLeft'>
                <img src={pop} alt="Dev" />
            </div>

            <div className='popUpRight'>
                <div className='popUpRightText'>
                    <h2>
                        Design And Plan
                    </h2>

                    <p>
                        This checklist defines a set of core quality criteria and associated tests that we
                        use to provide our clients with the best applications
                    </p>

                    <ul>
                        <li>
                            <img src={check} alt="Check" />
                            <p>
                                User Friendly
                            </p>
                        </li>

                        <li>
                            <img src={check} alt="Check" />
                            <p>
                                Desired Functionality
                            </p>
                        </li>

                        <li>
                            <img src={check} alt="Check" />
                            <p>
                                Performance And Stability
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

  )
}

export default PopUp