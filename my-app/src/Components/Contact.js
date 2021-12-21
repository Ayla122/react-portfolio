import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { validateEmail } from '../utils/Helpers';

function ContactForm() {

    // JSX
    return (
        <section>
            <form id="contact-form">
                <h1>Contact me</h1>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" />
                </div>
                <button type="submit">Submit</button>
            </form>
            <p class="mt-5">
                <a href="https://www.linkedin.com/in/ayla-moss-260967211/">
                    <img
                        src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                        alt="inkedIn"
                    />
                </a>
            </p>
           
        </section>
    )
}

export default ContactForm;