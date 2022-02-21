import React, { useRef, useState } from "react";
import { loginimg } from "./../../../assets";
import styles from "./Forgot_Password.module.css";
import { useMediaQuery } from "react-responsive";
import LoginVerify from "../Login/Login-Verify/LoginVerify";

function Forgot_Password(props) {
  const [verify, setVerify] = useState(false);
  const phoneRef = useRef("");

  const handleChange = async (e) => {
    e.preventDefault();
    if (!phoneRef?.current?.value) {
      alert("Please enter your mobile number");
      return;
    }
    setVerify(!verify);
  };

  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <>
      {props.showLogin === "open" &&
        props.modalComponent === "forgot_password" &&
        !verify && (
          <div
            className={styles.forgot_password}
            onClick={isMobile ? props.handleClick : undefined}
          >
            <div className={styles.forgot_password__container}>
              <div className={styles.forgot_password__content}>
                <div className={styles.forgot_password__image_content}>
                  <img src={loginimg} alt="" />
                  <div className={styles.forgot_password__image_content_text}>
                    <h4>Welcome to Priceagain</h4>
                    <p>Join now and get </p>
                    <p>₹50 welcome bonus </p>
                  </div>
                </div>

                <div className={styles.forgot_password__form_content}>
                  <form action="">
                    <h2>Forgot Password</h2>

                    <input
                      ref={phoneRef}
                      type="number"
                      id="email"
                      name="number"
                      placeholder="Phone Number"
                      required
                    />

                    <button onClick={handleChange}>Forgot Password</button>
                  </form>

                  <div className={styles.forgot_password__footer}>
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
        )}

      {props.showLogin === "open" &&
        props.modalComponent === "forgot_password" &&
        verify && (
          <LoginVerify
            handleClick={props.handleClick}
            handleChange={props.handleChange}
            mobileNumber={phoneRef?.current?.value}
            setVerify={setVerify}
          />
        )}
    </>
  );
}

export default Forgot_Password;
