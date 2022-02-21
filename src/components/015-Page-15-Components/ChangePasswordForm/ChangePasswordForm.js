import React, { useState } from "react";
import styles from "./ChangePasswordForm.module.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { updateUserPassword } from "../../../store/actions/User-actions";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../../components/000-Base-Components/Message/Message";

function ChangePasswordForm({ userInfo }) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [currentPassword, setCurrentPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmNewPassword, setConfirmNewPassword] = useState();
  const [message, setMessage] = useState();
  const dispatch = useDispatch();

  const userUpdatePassword = useSelector((state) => state.userUpdatePassword);
  const { success, messageInfo, error } = userUpdatePassword;

  const submitHandler = (e) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(
        updateUserPassword({
          id: userInfo?.data[0].customer_id,
          current_password: currentPassword,
          new_password: newPassword,
          authToken: userInfo?.data[0].token,
        })
      );
      setMessage();
    }
  };

  return (
    <div className={styles.change_password_form}>
      <div className={styles.change_password_form__text_heading}>
        <h1>
          {isMobile && (
            <Link to="/overview">
              <ChevronLeftIcon />
            </Link>
          )}
          Change Password
        </h1>
        <p>Please elaborate your concern in the below. </p>
        {success && <Message success={true} message={messageInfo.msg} />}
        {error && <Message error={true} message={error.msg} />}
      </div>

      <div className={styles.change_password_form__container}>
        <form onSubmit={submitHandler}>
          <input
            required
            type="password"
            name="current_password"
            id="current_password"
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <input
            required
            type="password"
            name="new_password"
            id="new_password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            required
            type="password"
            id="confirm_new_password"
            name="confirm_new_password"
            placeholder="Confirm New Password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />

          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
}

export default ChangePasswordForm;
