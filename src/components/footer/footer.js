import React from 'react'
import './footer.css'
import phone from '../../assets/images/phone-call.png';
import email from '../../assets/images/email.png';
import address from '../../assets/images/pin.png';



function Footer() {
  return (
    <div className='footerContainer'>
        <div className='footer'>
            <div className='footerBox'>
                <h2>
                    About Volvec Technology
                </h2>

                <p>
                    Since establishment in 2019 Volvec Technology has focused on design and development
                    of software and tech-hardware/ IOT based system solutions with a focus on improving
                    the effectiveness and efficiency of our customer business operations
                </p>
            </div>

            <div className='footerBox'>
                <h2>
                    Contact
                </h2>

                <p>
                    Don't hesitate to give us a call or send us a contact form message
                </p>

                <div className='footerInfo'>
                    <div className='footerInfoBox'>
                        <img src={phone} alt="Phone" />
                        <p>
                            +260 979111111
                        </p>
                    </div>

                    <div className='footerInfoBox'>
                        <img src={email} alt="Email" />
                        <p>
                            info@volvectechnology.com
                        </p>
                    </div>

                    <div className='footerInfoBox'>
                        <img src={address} alt="Address" />
                        <p>
                            Lusaka, Zambia. 
                        </p>
                    </div>
                </div>
            </div>

            <div className='footerBox'>
                <h2>
                    Services
                </h2>

                <p>
                    Software Development
                </p>
                <p>
                    Web/Mobile App Design
                </p>
                <p>
                    IoT Solutions
                </p>
            </div>
        </div>


        <div className='copyright'>
            <p>
                Copyright © 2022 - All rights reserved
            </p>
        </div>
    </div>
  )
}

export default Footer