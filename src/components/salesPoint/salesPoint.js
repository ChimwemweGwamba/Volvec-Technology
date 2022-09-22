import React from 'react'
import './salesPoint.css'
import Button from '../button/button'
import dev from '../../assets/images/dev_productivity.svg';
import scrum from '../../assets/images/Scrum_board.svg';
import check from '../../assets/images/check.png';
import customer from '../../assets/images/business_deal (1).svg';


function SalesPoint() {
  return (
    <div className='salesPointContainer'>
      <div className='salesPoint'>
        <div className='salesPointText'>
          <h1>
            We Build Technologies That Ensure Maximum Productivity
          </h1>

          <p>
            Our engineers deliver solutions to improve work flow, efficiency, user engagement,
            reduce costs and provide better customer experiences for our clients.
          </p>

          <Button buttonText={'Learn more'}></Button>

        </div>

        <div className='salesPointImg'>
          <img src={dev} alt="Dev" />
        </div>
      </div>


      <div className='salesPoint'>
        <div className='salesPointImg'>
          <img src={scrum} alt="Scrum" />
        </div>

        <div className='salesPointText'>
          <h1>
            Achieve Growth With Digital Solutions
          </h1>

          <p>
            Our team of develeopers work with you to build user driven solutions that
            are intuitive and allows easy user management.
          </p>

          <ul>
            <li>
              <img src={check} alt="Check" />
              <p>
                Support you across development lifecycle
              </p>
            </li>

            <li>
              <img src={check} alt="Check" />
              <p>
                Create your own skin to match your brand
              </p>
            </li>

            <li>
              <img src={check} alt="Check" />
              <p>
                Timely service
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className='salesPoint'>
        <div className='salesPointText'>
          <h1>
            Customer Driven Solutions
          </h1>

          <p>
            We are customer driven and prefer to work with our clients to understand their industry,
            business and customers. From this discovery, we can recommend what solutions would best 
            suit the business and its customers based on the functionality required, integration with
            other business systems and budget available.
          </p>
        </div>

        <div className='salesPointImg'>
          <img src={customer} alt="Scrum" />
        </div>
      </div>

    </div>
  )
}

export default SalesPoint