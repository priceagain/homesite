import React from "react";
import { Link } from "react-router-dom";
import styles from "./Invite_Info.module.css";
import { inviteImg } from "../../../assets/index";

function Invite_Info() {
  return (
    <div className={styles.invite_info}>
      <div className={styles.invite_info__container}>
        <div className={styles.invite_info_link}>
          <Link to="/">Home</Link>/ Invite
        </div>

        <div className={styles.invite_info__content}>
          <div className={styles.invite_info__left_content}>
            <div className={styles.invite_info_text}>
              <h2>
                Invite New Pros,
                <br />
                Get $200 Credit.
              </h2>

              <p>
                Get $200 credit when someone you refer that ends $200 on
                Thumbtack. <a href="#">Terms apply.</a>
              </p>
            </div>
          </div>

          <div className={styles.invite_info__right_content}>
            <div className={styles.invite_info__image_container}>
              <img src={inviteImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invite_Info;
