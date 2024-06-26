import React, { useState } from 'react'
import './Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const [done , setDone] = useState(false)



  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ml9er1b', 'template_anoi768', form.current, {
        publicKey: 'vEvFbtEMN3q-vQtVp',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setDone(true);
       
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div className='contact-form'>
      <div className='w-left'>
        <div className='awesome'>
          <span>Get in touch</span>
          <span>Contact me</span>
          <div className='blur s-blur1' style={{background: "#abf1ff94"}}></div>
        </div>
      </div>
      <div className='c-right'>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='user_name' className='user' placeholder='Name'/>
          <input type='email' name='user_email' className='user' placeholder='Email'/>
          <textarea name='message' className='user' placeholder='Message'/>
          <textarea name='message2' className='user' placeholder='Message'/>
          <input type='submit' className='button' placeholder='Name'/>

          <span>{done && "Thanks for contacting me!"}</span>

          <div className='blur c-blur2'
           style={{background:"var(--purple)"}}></div>
        
        </form>
      </div>

    </div>
  )
}

export default Contact