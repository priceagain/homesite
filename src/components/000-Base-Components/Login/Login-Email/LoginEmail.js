import React, { useState } from "react";
import { loginimg } from "../../../../assets";
import styles from "./LoginEmail.module.css";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { IconButton } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { login } from "../../../../store/actions/User-actions";
import Message from "../../Message/Message";

function LoginEmail(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  const submitHandler = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      return dispatch(login(email, password));
    }
  };

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <>
      {props.showLogin === "open" && props.modalComponent === "email" && (
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
                  <p>Join now and get </p>
                  <p>₹50 welcome bonus </p>
                </div>
              </div>

              <div className={styles.login__form_content}>
                <h2>Login</h2>
                {error && <Message error={true} message={error} />}
                <form onSubmit={submitHandler}>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <span>
                    <input
                      type={values.showPassword ? "text" : "password"}
                      onChange={handlePasswordChange("password")}
                      value={values.password}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </span>

                  <div className={styles.login__forgot_password}>
                    <span>
                      <input type="checkbox" name="keepsignedin" />
                      <label htmlFor="keepsignedin">Keep me signed in</label>
                    </span>

                    <p
                      onClick={(e) => props.handleChange(e, "forgot_password")}
                    >
                      Forgot Password?
                    </p>
                  </div>

                  <button type="submit">Get Started</button>
                </form>

                <button
                  onClick={(e) => props.handleChange(e, "mobile")}
                  className={styles.login__button}
                >
                  Login with PhoneNumber
                </button>

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
    </>
  );
}

export default LoginEmail;
