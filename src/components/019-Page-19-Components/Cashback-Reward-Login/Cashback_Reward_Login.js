import React from "react";
import styles from "./Cashback_Reward_Login.module.css";
import { logo } from "../../../assets/images/index.js";

function Cashback_Reward_Login({ handleClick, handleChange }) {
  const handleButton = (e, text) => {
    e.preventDefault();
    handleClick(e);
    if (text === "signup") {
      handleChange(e, text);
    }
  };

  return (
    <div className={styles.reward_login}>
      <div className={styles.reward_login__container}>
        <div className={styles.reward_login__image_container}>
          <img src={logo} alt="" />
        </div>

        <div className={styles.reward_login__text}>
          <h4>1 Step away from earing</h4>
          <h4>Flat 8% Cashback on your order</h4>
        </div>

        <div className={styles.reward_login__button_container}>
          <button
            className={styles.reward_login__button}
            onClick={(e) => handleButton(e, "email")}
          >
            Already a user ? login
          </button>
          <button onClick={(e) => handleButton(e, "signup")}>
            Create an account
          </button>
        </div>

        <p>
          <span>Continue</span> & Lose Cashback
        </p>
      </div>
    </div>
  );
}

export default Cashback_Reward_Login;
