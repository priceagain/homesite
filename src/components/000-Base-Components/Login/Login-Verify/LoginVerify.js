import React, { useEffect, useState } from "react";
import { loginimg2 } from "../../../../assets";
import styles from "./LoginVerify.module.css";
import { useMediaQuery } from "react-responsive";
import NewPassword from "../../New_Password/New_Password";
import axios from "../../../../axios";
import Message from "../../Message/Message";

function LoginVerify(props) {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [response, setResponse] = useState();
  const [verify, setVerify] = useState(false);

  const handleChange = (e, index) => {
    if (isNaN(e.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? e.value : d))]);

    if (e.nextSibling) {
      e.nextSibling.focus();
    }
  };

  useEffect(() => {
    sendOtp();
  }, []);

  const sendOtp = () => {
    axios
      .post("/api/v1/otpSend", {
        mobile: props.mobileNumber,
      })
      .then((res) => {
        setResponse(res.data.msg);
      });

    setOtp(new Array(6).fill(""));
  };

  const verfiyHandler = () => {
    const mobile = props.mobileNumber;
    const otpNo = otp.join("");
    axios
      .post(
        "/api/v1/otpVerify",
        {
          mobile: mobile,
          otp: otpNo,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.data.status == "0") {
          return setResponse(response.data.msg);
        }
        return setVerify((prev) => !prev);
        // return props.handleChange(e, "email");
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (props.loginHandler) {
      props.loginHandler(props.mobileNumber, otp);
      return;
    }
    verfiyHandler();
  };

  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <>
      {!verify ? (
        <div
          className={styles.login}
          onClick={isMobile ? props.handleClick : undefined}
        >
          <div className={styles.login__container}>
            <div className={styles.login__content}>
              <div className={styles.login__image_content}>
                <img src={loginimg2} alt="" />
                <div className={styles.login__image_content_text}>
                  <h4>Welcome to Priceagain</h4>
                  <p>Discover new stores, shope</p>
                  <p>online and earn cashback one</p>
                  <p>every purchase</p>
                </div>
              </div>

              <div className={styles.login__form_content}>
                <div className={styles.login__text}>
                  <h1>Verify Mobile Number</h1>
                  {response && <Message info={true} message={response} />}
                  <p>
                    Please enter the One Time Password (OTP) <br />
                    send to : <span>{props?.mobileNumber}</span>
                  </p>
                </div>

                <div className={styles.login__otp}>
                  <form onSubmit={submitHandler}>
                    <div className={styles.login__otp_input}>
                      {otp.map((data, index) => (
                        <input
                          type="number"
                          name="otp"
                          min="0"
                          max="9"
                          key={index}
                          value={data}
                          onChange={(e) => handleChange(e.target, index)}
                          onFocus={(e) => e.target.select()}
                          required
                        />
                      ))}
                    </div>
                    <span onClick={sendOtp}>Resend OTP</span>
                    <button type="submit">
                      {props.loginHandler ? "Login" : "Verify OTP"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <NewPassword
          handleClick={props.handleClick}
          handleChange={props.handleChange}
          mobileNumber={props.mobileNumber}
          setVerify={props.setVerify}
        />
      )}
    </>
  );
}

export default LoginVerify;
