import React, { useState, useRef, useEffect} from "react";
import "./Contact.css"
import Particle from "../../Components/Particles/Particles";
import { db } from "../../firebase";
import { set, ref } from "firebase/database";
import 'firebase/database'

const MESSAGES = {
    EMPTY_NAME: "Empty Name.",
    EMPTY_EMAIL: "Empty Email.",
    EMPTY_MESSAGE: "Empty Message.",
    INVALID_EMAIL: "Invalid Email.",
    SERVER_ERROR:"Server Error."
}

const Contact = () => {

    const [error, setError] = useState(false)
    const [send, setSend] = useState(false)
    const [disabled, setDisable] = useState(false)
    
    const contactName = useRef();
    const contactEmail = useRef();
    const contactMessage = useRef();

    const validate = (user) => {

        if(user.name === ""){
            setError(true);
            return false;
        }
        if(user.email === ""){
            setError(true);
            return false;
        }
        if(user.message === ""){
            setError(true);
            return false;
        }
        if(!user.email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )){
            setError(true);
            return false;
        }

        setError(false);
        return true;
    }
    
    const handleSubmit = (event) =>{
        setSend(false)
        event.preventDefault();
        setDisable(true);
        const user = {
            name: (contactName.current.value).trim(),
            email: (contactEmail.current.value).trim(),
            message: (contactMessage.current.value).trim() 
        };
        if(validate(user)){
            try {
                set(ref(db, 'Contact/'+Math.round(Math.random()*100000)), user);
                contactName.current.value = "";
                contactEmail.current.value = "";
                contactMessage.current.value = "";
                setSend(true)
                setError(false)
            } catch (e){
                setSend(false)
                setError(true);
            }
        }
        setDisable(false);
    }

    return(
        <div className="contact">
            <Particle/>
            <div className="floating-contact-container">
                <div className="contact-detail">
                    <div className="contact-detail-inner-container">
                        <h2 className="contact-detail-header">
                            Reach Us
                        </h2>
                        <p className="contact-detail-description">
                            ECEA, College of Engineering Guindy,<br/>
                            Sardar Patel Road, Chennai-25<br/>
                            Phone - 6383808655
                        </p>
                    </div>
                    {/* <div className="contact-detail-inner-container">
                        <h2 className="contact-detail-header">
                            Contact</h2>
                        <p className="contact-detail-description">
                            Aravindh Guru S - 6383808665<br/>
                            Yughendaran P - 9003753245
                        </p>
                    </div> */}
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input ref={contactName} style={{width: "calc( 100% - 30px)"}} className="contact-form-field" name="Name" type="text" placeholder="Name"/>
                    <input ref={contactEmail} style={{width: "calc( 100% - 30px)"}} className="contact-form-field" name="Email Id" type="text" placeholder="Email Id"/><br/>
                    <textarea ref={contactMessage} style={{width: "calc( 100% - 30px)", height: "125px"}} className="contact-form-field" name="Content" placeholder="Message"/><br/>
                    <button disabled={disabled} className="contact-form-button">
                        {send && "Sended!!!"}
                        {error && "Error!!!"}
                        {!send && !error && "Send"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;