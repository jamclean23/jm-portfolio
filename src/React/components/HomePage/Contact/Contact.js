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
    const [sentStatusMsg, setSentStatusMsg] = useState('');
    const [recaptchaValidMsg, setRecaptchaValidMsg] = useState('');
    const [recaptchaRef, setRecaptchaRef] = useState();

    // LISTENERS 

    // FUNCTIONS

    function handleSubmitClick (event) {
        event.preventDefault()

        // Field values
        const name = document.querySelector('.Contact #name').value;
        const email = document.querySelector('.Contact #email').value;
        const message = document.querySelector('.Contact #message').value;

        if (validateForm(name, email, message) && recaptchaValid) {
            resetRecaptcha();
            submit(name, email, message);
        }

        // TEST
        // console.log('TEST, COMMENT OUT TO ENABLE CAPTCHA');
        // validateForm(name, email, message);
        // submit(name, email, message);
    }

    function validateForm (name, email, message) {

        let nameValid = validateName(name);
        let emailValid = validateEmail(email);
        let messageValid = validateMessage(message);
        validateRecapatcha();
        
        if (nameValid && emailValid && messageValid) {
            return true;
        } else {
            return false;
        }
    }

    function validateRecapatcha () {
        if (recaptchaValid) {
            setRecaptchaValidMsg('');
        } else {
            setRecaptchaValidMsg('Please complete the capatcha');
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
        if (!email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i)) {
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
        const sentMsgSpan = document.querySelector('.Contact .sentMsg');

        setSubmitDisabled(true);

        let results;
        try {
            results = await postMessage(name, email, message);
        } catch (error) {
            sentMsgSpan.classList.remove('valid');
            setSentStatusMsg('Sorry, message not sent, try again later.');
            console.log(error);
        }

        if (results) {
            sentMsgSpan.classList.add('valid');
            setSentStatusMsg('Message sent, check your inbox for confirmation.');
            console.log(results);
        }

        setSubmitDisabled(false);
    }

    function postMessage (name, email, message) {
        return new Promise( async (resolve, reject) => {
            const controller = new AbortController();
            let signal = controller.signal;
            setTimeout(() => controller.abort(), 5000);

            let results;
            try {
                results = await fetch('https://server0424.lol/send-email', {
                    method: "POST",
                    mode: "cors",
                    signal,
                    headers: {
                        'name': name,
                        'email': email,
                        'message': message
                    }
                });
            } catch (error) {
            }

            if (results) {
                results = await results.json();
                resolve(results.body);
            } else {
                reject('Timeout');
            }
        });
    }

    function handleRecapatcha (value) {
        if (value) {
            setRecapatchaValid(true);
            setRecaptchaValidMsg('');
        } else {
            setRecapatchaValid(false);
            setRecaptchaValidMsg('Please complete the capatcha');
        }
    }

    function handleNameInput () {
        const name = document.querySelector('.Contact #name').value;
        validateName(name);
    }
    
    function handleEmailInput () {
        const email = document.querySelector('.Contact #email').value;
        validateEmail(email);
    }
    
    function handleMessageInput () {
        const message = document.querySelector('.Contact #message').value;
        validateMessage(message);
    }

    function resetRecaptcha () {
        recaptchaRef.reset();
        setRecapatchaValid(false);
    }

    // RENDER

    return (
        <section className="Contact">
            <h2>// Contact</h2>
            <p className="description">I would love to hear from you. Send me message and let's <span className="accent">connect</span>!</p>
            <form>

                <div className="inputWrapper">
                    <label htmlFor="name">Name</label>
                    <input onInput={handleNameInput} maxLength={100} id='name' type="text" placeholder="Your name"/>
                    <span className="validityMsg">{nameValidityMsg}</span>
                </div>

                <div className="inputWrapper">
                    <label htmlFor="email">Email</label>
                    <input onInput={handleEmailInput} maxLength={100} id='email' type="text" placeholder="example@gmail.com"/>
                    <span className="validityMsg">{emailValidityMsg}</span>
                </div>

                <div className="inputWrapper">
                    <label htmlFor='message'>Message</label>
                    <textarea onInput={handleMessageInput} maxLength={5000} id='message'/>
                    <span className="validityMsg">{messageValidityMsg}</span>
                </div>

                <div className="recaptchaWrapper">
                    <ReCAPTCHA
                        sitekey={siteKey}
                        onChange={handleRecapatcha}
                        ref={(event) => {
                            setRecaptchaRef(event);
                        }}
                    />
                    <span className="validityMsg">{recaptchaValidMsg}</span>
                </div>

                <div className="btnWrapper">
                    <button disabled={submitDisabled} onClick={handleSubmitClick}>Submit</button>
                    <span className="validityMsg sentMsg">{sentStatusMsg}</span>
                </div>
            </form>
        </section>
    );
}


// ====== EXPORT ======

export default Contact;