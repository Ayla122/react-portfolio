import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { validateEmail } from '../utils/Helpers';

function ContactForm() {

    // JSX
    return (
        <section className='page-container'>
            
            
            <form id="contact-form">
                <h1 id="contactMe">Contact Me</h1>
                <a href="https://www.linkedin.com/in/ayla-moss-260967211/" className='con-link'>
                    LinkedIn
                </a>
                <a>|</a>
                <a href="mailto:ayladd122@gmail.com" className='con-link'>
                   Email
                </a>
                <a>|</a>
                <a href="tel:5035198565" className='con-link'>
                Phone
                </a>
            
           </form>
        </section>
    )
}

export default ContactForm;