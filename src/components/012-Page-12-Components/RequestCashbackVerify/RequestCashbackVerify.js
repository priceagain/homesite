import axios from "../../../axios";
import React, { useEffect } from "react";
import styles from "./RequestCashbackVerify.module.css";

function RequestCashbackVerify({
  verifyUser,
  setOtp,
  otp,
  showModal,
  mobileNumber,
}) {
  useEffect(() => {
    if (showModal === "open") {
      sendOtp("first");
    }
  }, [showModal]);

  const sendOtp = async (type) => {
    const { data } = await axios.post("/api/v1/otpSend", {
      mobile: mobileNumber,
    });
    if (type === "second") {
      alert(data.msg);
    }
  };

  const handleChange = (e, index) => {
    if (isNaN(e.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? e.value : d))]);

    if (e.nextSibling) {
      e.nextSibling.focus();
    }
  };
  return (
    <>
      {showModal === "open" && (
        <div className={styles.request_cashback_verify}>
          <div className={styles.request_cashback_verify__container}>
            <div className={styles.request_cashback_verify__text}>
              <h1>Verify Mobile Number</h1>
              <p>
                Please enter the One Time Password (OTP) <br />
                send to : <span>{mobileNumber}</span>
              </p>
            </div>

            <div className={styles.request_cashback_verify__otp}>
              <form action="">
                <div className={styles.request_cashback_verify__otp_input}>
                  {otp.map((data, index) => (
                    <input
                      type="number"
                      name="otp"
                      min="1"
                      max="9"
                      key={index}
                      value={data}
                      onChange={(e) => handleChange(e.target, index)}
                      onFocus={(e) => e.target.select()}
                    />
                  ))}
                </div>
                <span onClick={() => sendOtp("second")}>Resend OTP</span>
                <button type="submit" onClick={verifyUser}>
                  Get Cashback
                </button>{" "}
                {/* onClick={props.handleClick} */}
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RequestCashbackVerify;
