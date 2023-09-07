// Contact section component

// ====== IMPORTS ======

// React
import React, { useEffect, useState } from "react";

// Css
import './Contact.css';

// Google Recaptcha
import ReCAPTCHA from "react-google-recaptcha";
import { siteKey } from "../../../../keys/recaptchaKeys.js";


// ====== COMPONENT ======

function Contact () {

    // VARIABLES

    const [recaptchaValid, setRecapatchaValid] = useState(false);
    const [nameValidityMsg, setNameValidityMsg] = useState('');
    const [emailValidityMsg, setEmailValidityMsg] = useState('');
    const [messageValidityMsg, setMessageValidityMsg] = useState('');
    const [submitDisabled, setSubmitDisabled] = useState(false);

    // LISTENERS 

    useEffect(() => {
        // console.log(nameValidityMsg);
    }, [nameValidityMsg]);

    // FUNCTIONS

    function handleSubmitClick (event) {
        event.preventDefault()

        // Field values
        const name = document.querySelector('.Contact #name').value;
        const email = document.querySelector('.Contact #email').value;
        const message = document.querySelector('.Contact #message').value;

        if (recaptchaValid && validateForm(name, email, message)) {
            submit(name, email, message);
        }

        // TEST
        console.log('TEST');
        validateForm(name, email, message);
        submit(name, email, message);
    }

    function validateForm (name, email, message) {

        let nameValid = validateName(name);
        let emailValid = validateEmail(email);
        let messageValid = validateMessage(message);
        
        if (nameValid && emailValid && messageValid) {
            console.log('VALID FORM');
            return true;
        } else {
            return false;
        }
    }

    function validateName (name) {
        if (!name) {
            setNameValidityMsg('Please provide a name');
            return false;
        } else {
            setNameValidityMsg('');
            return true;
        }
    }

    function validateEmail (email) {
        if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            setEmailValidityMsg('Please provide a valid email');
            return false;
        } else {
            setEmailValidityMsg('');
            return true;
        }
    }

    function validateMessage (message) {
        if (!message) {
            setMessageValidityMsg('Please provide a message');
            return false;
        } else {
            setMessageValidityMsg('');
            return true;
        }
    }   

    async function submit (name, email, message) {
        setSubmitDisabled(true);

        let results = await postMessage();

        if (results) {
            console.log('Sent.');
        } else {
            console.log('Not sent');
        }

        setSubmitDisabled(false);
    }

    function postMessage (name, email, message) {
        return new Promise((resolve, reject) => {
            console.log
            setTimeout(resolve.bind(this, true), 3000);
        });
    }

    function handleRecapatcha (value) {
        if (value) {
            setRecapatchaValid(true);
        } else {
            setRecapatchaValid(false);
        }
    }


    // RENDER

    return (
        <section className="Contact">
            <h2>// Contact</h2>
            <p className="description">I would love to hear from you. Send me message and let's <span className="accent">connect</span>!</p>
            <form>

                <div className="inputWrapper">
                    <label htmlFor="name">Name</label>
                    <input maxLength={100} id='name' type="text" placeholder="Your name"/>
                    <span className="validityMsg">{nameValidityMsg}</span>
                </div>

                <div className="inputWrapper">
                    <label htmlFor="email">Email</label>
                    <input maxLength={100} id='email' type="text" placeholder="example@gmail.com"/>
                    <span className="validityMsg">{emailValidityMsg}</span>
                </div>

                <div className="inputWrapper">
                    <label htmlFor='message'>Message</label>
                    <textarea maxLength={5000} id='message'/>
                    <span className="validityMsg">{messageValidityMsg}</span>
                </div>

                <div className="recaptchaWrapper">
                    <ReCAPTCHA
                        sitekey={siteKey}
                        onChange={handleRecapatcha}
                    />
                </div>

                <div className="btnWrapper">
                    <button disabled={submitDisabled} onClick={handleSubmitClick}>Submit</button>
                </div>
            </form>
        </section>
    );
}


// ====== EXPORT ======

export default Contact;