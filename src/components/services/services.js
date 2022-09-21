import React from 'react'
import './services.css'
import cpu from '../../assets/images/cpu.png'
import app from '../../assets/images/app-development.png'
import data from '../../assets/images/data.png'



function Services() {
  return (
    <div className='servicesContainer'>
        <h1>
            OUR SERVICES
        </h1>

        <p>
            At every stage of development, quality assurance (QA) is performed 
            to ensure that the solutions meets the requirements and is fully functional
        </p>


        <div className='serviceContainer'>
            <div className='service'>
                <img src={data} alt="Data" />
                
                <h3>
                    Software Development
                </h3>

                <p>
                    Whether your business requires an enterprise system to streamline internal processes,
                    improve customer experience or reduce costs, we work with you to create software solutions
                    that work for your business teams and your customers.
                </p>

            </div>

            <div className='service'>
                <img src={app} alt="Data" />

                <h3>
                    Web/Mobile App Design
                </h3>

                <p>
                    Our multi-talented designers can deliver projects of any complexity, from a small marketing 
                    website or mobile app to a sophisticated e-commerce solution. Our team will develop solutions
                    that support your business goals.
                </p>
            </div>

            <div className='service'>
                <img src={cpu} alt="Data" />
                
                <h3>
                    IoT Solutions
                </h3>

                <p>
                    Whether optimizing power consumption, deploying sensor arrays, need a custom unique device, 
                    or effectively integrating wireless technologies, Volvec Technology offers solutions to meet
                    your business needs.
                </p>
            </div>
        </div>

    </div>
  )
}

export default Services