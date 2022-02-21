import React, { useState } from "react";
import styles from "./ManageAccountForm.module.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { useDispatch } from "react-redux";
import Message from "../../../components/000-Base-Components/Message/Message";
import axios from "../../../axios";

function ManageAccountForm({ userInfo }) {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [resMessage, setresMessage] = useState();

  const [name, setName] = useState(userInfo?.data[0].customer_name);
  const [email, setEmail] = useState(userInfo?.data[0].customer_email);
  const [mobile, setMobile] = useState(userInfo?.data[0].customer_mobile);

  const submitHandler = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(`/api/v1/updateprofile`, {
      id: userInfo?.data[0].customer_id,
      customer_name: name,
      authToken: userInfo?.data[0].token,
    });
    if (data.status == 1) {
      setresMessage(data.msg);

      dispatch({
        type: "USER_LOGIN_UPDATE",
        payload: {
          customer_name: name,
          customer_email: email,
          customer_mobile: mobile,
        },
      });
    }
  };

  return (
    <div className={styles.manage_account_form}>
      <div className={styles.manage_account_form__text_heading}>
        <h1>
          {isMobile && (
            <Link to="/overview">
              <ChevronLeftIcon />
            </Link>
          )}
          Manage Account
        </h1>
        <p>Please elaborate your concern in the below. </p>
        {resMessage && <Message success={true} message={resMessage} />}
      </div>

      <div className={styles.manage_account_form__container}>
        <form onSubmit={submitHandler}>
          <input
            required
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            disabled
            required
            type="email"
            name="email"
            id="email"
            placeholder="Eamil"
            value={email}
          />
          <input
            disabled
            required
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{10}"
            placeholder="Phone Number"
            value={mobile}
          />

          <button type="submit">Save Changes</button>
        </form>
      </div>

      {!isMobile && (
        <div className={styles.manage_account_form__note}>
          <p>
            <span>NOTE:</span>
            To Change your email/mobile number please write to
            <a href="mailto:contact@priceagain.com">contact@priceagain.com</a>
          </p>
        </div>
      )}
    </div>
  );
}

export default ManageAccountForm;
