import React, { useRef, useState } from "react";
import { loginimg } from "../../../assets";
import styles from "./New_Password.module.css";
import { useMediaQuery } from "react-responsive";
import axios from "../../../axios";

function New_Password(props) {
  const passwordRef = useRef("");

  const handleChange = async (e) => {
    e.preventDefault();
    if (!passwordRef?.current?.value) {
      alert("Please enter your mobile number");
      return;
    }
    axios
      .post(
        "/api/v1/updatePassword",
        {
          mobile_no: props.mobileNumber,
          password: passwordRef.current.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
        props.setVerify(false);
        return props.handleChange(e, "email");
      });
  };

  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div
      className={styles.new_password}
      onClick={isMobile ? props.handleClick : undefined}
    >
      <div className={styles.new_password__container}>
        <div className={styles.new_password__content}>
          <div className={styles.new_password__image_content}>
            <img src={loginimg} alt="" />
            <div className={styles.new_password__image_content_text}>
              <h4>Welcome to Priceagain</h4>
              <p>Join now and get </p>
              <p>₹50 welcome bonus </p>
            </div>
          </div>

          <div className={styles.new_password__form_content}>
            <form action="">
              <h2>New Password</h2>

              <input
                ref={passwordRef}
                type="password"
                id="password"
                name="text"
                placeholder="New Password"
                required
              />

              <button onClick={handleChange}>Update Password</button>
            </form>

            <div className={styles.new_password__footer}>
              <h4>
                New to Priceagain?{" "}
                <span onClick={(e) => props.handleChange(e, "signup")}>
                  Create account
                </span>
              </h4>
              <p>By creating a new account, you agree to Priceagain's</p>
              <p>
                <a href="#"> Terms & Conditions</a> and{" "}
                <a href="#">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New_Password;
