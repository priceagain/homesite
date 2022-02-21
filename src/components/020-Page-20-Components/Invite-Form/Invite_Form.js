import React from "react";
import styles from "./Invite_Form.module.css";

function Invite_Form() {
  return (
    <div className={styles.invite_form}>
      <div className={styles.invite_form__container}>
        <form action="post">
          <h6>Invite your friends</h6>
          <p>Please elaborate your concern in the below. </p>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
            />
            <button type="submit">Send</button>
          </div>
        </form>

        <div className={styles.invite_form__referral}>
          <h6>Share the referral link</h6>
          <p>Please elaborate your concern in the below. </p>

          <div className={styles.invite_form__referral_link}>
            <p>
              ₹97tcxvas8ochcac{" "}
              <span
                onClick={() => {
                  navigator.clipboard.writeText("₹97tcxvas8ochcac");
                }}
              >
                Copy Link
              </span>
            </p>
            <img
              src="https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png"
              alt=""
            />
            <img
              src="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/telegram-512.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invite_Form;
