import React, { useState } from 'react'
import "./Contact.scss"
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

export const Contact = () => {

    const formRef = useRef()
    const [error,setError] = useState(false)
    const [success,setSuccess] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_ftzr1su', 'template_zlm54wu', formRef.current, {
            publicKey: 'RpOOjF00_4yJNuFvK',
          })
          .then(
            () => {
              setSuccess(true);
            },
            (error) => {
              setError(true);
            },
          );
      };


  return (
    <div className='contact'>
        <div className="textContainer">
            <h1>Let s work together</h1>
            <div className="item">
                <h2>Mail</h2>
                <span>guliciuc.denis2003@gmail.com</span>
            </div>
            <div className="item">
                <h2>Adress</h2>
                <span>Suceava Ipotesti</span>
            </div>
            <div className="item">
                <h2>Phone</h2>
                <span>0740 421 259</span>
            </div>
        </div>
        <div className="formContainer">
           <form ref={formRef} onSubmit={sendEmail} >
            <input type="text" required  placeholder="Name" name="from_name" ></input>
            <input type="email" required placeholder="Email" name="to_name" ></input>
            <textarea rows={8} placeholder="Message" name="message" ></textarea>
            <button type="submit">Send</button>
            {error && "Error"}
            {success && "Success"}
            </form> 
        </div>
    </div>
  )
}
