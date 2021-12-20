import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { validateEmail } from '../utils/Helpers';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
    
                if(!isValid) {
                    setErrorMessage('please enter a valid email');
                } else {
                    setErrorMessage('');
                }

            } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                } 
        }

        if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

return (
    <div>
        <div className="form-group">
      <label for="name">Name: </label>
      <input type="name" className="form-control" id="name" />
    </div>
    <div className="form-group">
      <label for="email">Email address:</label>
      <input type="email" className="form-control" id="email" />
    </div>
    <div className="form-group">
      <label for="mess">Message</label>
      <input type="message" className="form-control" id="mess" />
    </div>
    <button type="submit" className="btn btn-default">Login</button>
 </div>
    );
}
    
export default ContactForm;