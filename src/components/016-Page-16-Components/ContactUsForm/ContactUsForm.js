import React, { useState } from "react";
import styles from "./ContactUsForm.module.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch, useSelector } from "react-redux";
import { contactUs } from "../../../store/actions/Overview-actions";
import Message from "../../000-Base-Components/Message/Message";

function ContactUsForm() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [isValid, setIsValid] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [messages, setMessages] = useState();

  const dispatch = useDispatch();
  const contactUsMessage = useSelector((state) => state.contactUs);
  const { message } = contactUsMessage;

  const submitHandler = (e) => {
    e.preventDefault();
    if (name !== "" && email !== "" && messages !== "") {
      dispatch(contactUs(name, email, messages));
    }

    setName("");
    setEmail("");
    setMessages("");
  };

  const handleRecaptcha = (e) => {
    setIsValid(true);
  };

  return (
    <div className={styles.contact_us_form}>
      <div className={styles.contact_us_form__text_heading}>
        <h1>
          {isMobile && (
            <Link to="/overview">
              <ChevronLeftIcon />
            </Link>
          )}
          Say Hello!
        </h1>
        <p>Please elaborate your concern in the below. </p>
        {message && message.status == 0 && (
          <Message error={true} message={message.message} />
        )}
        {message && message.status == 1 && (
          <Message success={true} message={message.message} />
        )}
      </div>

      <div className={styles.contact_us_form__container}>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="5"
            placeholder="Please enter your Message"
            value={messages}
            onChange={(e) => setMessages(e.target.value)}
            required
          ></textarea>
          <button type="submit" disabled={!isValid}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUsForm;
