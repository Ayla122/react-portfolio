import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { validateEmail } from '../utils/Helpers';

function ContactForm() {

    // JSX
    return (
        <section>
            <form id="contact-form">
                <h1 id="contactMe">Contact me</h1>
            
                <a href="https://www.linkedin.com/in/ayla-moss-260967211/">
                    <img
                        src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                        alt="inkedIn"
                    />
                </a>
           
                <a href="mailto:devaylamoss@gmail.com">
                    <img id="gmail"
                        src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Gmail_Icon_%282013-2020%29.svg"
                        alt="gmail"
                    />
                </a>

                <a href="tel:5035198565">
                <img id="phone"
                        src="https://upload.wikimedia.org/wikipedia/commons/6/63/Black_telephone_icon_from_DejaVu_Sans.svg"
                        alt="phone"
                    />
                </a>
            
           </form>
        </section>
    )
}

export default ContactForm;