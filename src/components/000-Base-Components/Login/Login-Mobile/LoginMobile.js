import React, { useRef, useState } from "react";
import { loginimg } from "../../../../assets";
import styles from "./LoginMobile.module.css";
import { useMediaQuery } from "react-responsive";
import LoginVerify from "../Login-Verify/LoginVerify";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
} from "../../../../store/constants/User-Constants";
import { useDispatch } from "react-redux";
import axios from "../../../../axios";

function LoginMobile(props) {
  const [verify, setVerify] = useState(false);
  const phoneRef = useRef("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    if (!phoneRef?.current?.value) {
      alert("Please enter your mobile number");
      return;
    }
    setVerify(!verify);
  };

  const loginHandler = async (mobile, otp) => {
    const otpNo = otp.join("");

    const { data } = await axios.post(
      "/api/v1/otpLogin",
      { mobile: mobile, otp: otpNo },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (data.status == 1) {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });
      localStorage.setItem("userInfo", JSON.stringify(data.data));
      return;
    } else {
      return dispatch({
        type: USER_LOGIN_FAIL,
        payload: data.msg,
      });
    }
  };

  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <>
      {props.showLogin === "open" &&
        props.modalComponent === "mobile" &&
        !verify && (
          <div
            className={styles.login}
            onClick={isMobile ? props.handleClick : undefined}
          >
            <div className={styles.login__container}>
              <div className={styles.login__content}>
                <div className={styles.login__image_content}>
                  <img src={loginimg} alt="" />
                  <div className={styles.login__image_content_text}>
                    <h4>Welcome to Priceagain</h4>
                    <p>Discover new stores, shop</p>
                    <p>online and earn cashback on</p>
                    <p>every purchase</p>
                  </div>
                </div>

                <div className={styles.login__form_content}>
                  <form action="">
                    <h2>Login</h2>

                    <input
                      ref={phoneRef}
                      type="tel"
                      id="phone"
                      name="phone"
                      pattern="[0-9]{9}"
                      placeholder="Mobile Number"
                      required
                    />

                    <div className={styles.login__forgot_password}>
                      <span>
                        <input
                          type="checkbox"
                          id="keepsignedin"
                          name="keepsignedin"
                        />
                        <label htmlFor="keepsignedin">Keep me signed in</label>
                      </span>

                      <p
                        onClick={(e) =>
                          props.handleChange(e, "forgot_password")
                        }
                      >
                        Forgot Password?
                      </p>
                    </div>

                    <button onClick={handleChange}>Get Started</button>
                  </form>

                  <div className={styles.login__footer}>
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
        props.modalComponent === "mobile" &&
        verify && (
          <LoginVerify
            handleClick={props.handleClick}
            handleChange={handleChange}
            mobileNumber={phoneRef?.current?.value}
            setVerify={setVerify}
            loginHandler={loginHandler}
          />
        )}
    </>
  );
}

export default LoginMobile;
