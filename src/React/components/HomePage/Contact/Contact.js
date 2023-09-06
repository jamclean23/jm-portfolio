// Contact section component

// ====== IMPORTS ======

// React
import React from "react";

// Css
import './Contact.css';


// ====== COMPONENT ======

function Contact () {

    // FUNCTIONS

    function handleSubmitClick (event) {
        event.preventDefault()

        // Field values
        const name = document.querySelector('.Contact #name').value;
        const email = document.querySelector('.Contact #email').value;
        const message = document.querySelector('.Contact #message').value;

        console.log(message);
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
                </div>

                <div className="inputWrapper">
                    <label htmlFor="email">Email</label>
                    <input maxLength={100} id='email' type="text" placeholder="example@gmail.com"/>
                </div>

                <div className="inputWrapper">
                    <label htmlFor='message'>Message</label>
                    <textarea maxLength={5000} id='message'/>
                </div>
                <div className="btnWrapper">
                    <button onClick={handleSubmitClick}>Submit</button>
                </div>
            </form>
        </section>
    );
}


// ====== EXPORT ======

export default Contact;