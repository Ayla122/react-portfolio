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
        </section>
    )
}

export default ContactForm;