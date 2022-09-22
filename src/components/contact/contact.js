import React from 'react'
import './contact.css'
import phone from '../../assets/images/phone-call.png';
import email from '../../assets/images/email.png';
import address from '../../assets/images/pin.png';
import mail from '../../assets/images/mail.svg';
import Button from '../button/button';



function Contact() {
  return (
    <div className='contactContainer'>
        <h2>
            Contact Information
        </h2>
        
        <p>
            Don't hesitate to give us a call or send us a contact form message
        </p>

        <div className='contactInfo'>
            <div className='contactInfoBox'>
                <img src={phone} alt="Phone" />
                <p>
                    +260 979111111
                </p>
            </div>

            <div className='contactInfoBox'>
                <img src={email} alt="Email" />
                <p>
                    info@volvectechnology.com
                </p>
            </div>

            <div className='contactInfoBox'>
                <img src={address} alt="Address" />
                <p>
                   Lusaka, Zambia. 
                </p>
            </div>
        </div>

        <div className='formContainer'>
            <div className='formBox'>
                <img src={mail} alt="Mail" />
            </div>

            <div className='formBox'>
                <form>
                    <input type="text" placeholder="Name"></input>
                    <input type="text" placeholder="Email"></input>
                    <input id='message' type="text" placeholder="Message"></input>

                    <Button buttonText={'Submit'}></Button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact