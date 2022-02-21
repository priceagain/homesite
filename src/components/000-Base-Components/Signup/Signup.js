import React, { useEffect, useState } from "react";
import styles from "./Signup.module.css";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Autorenew from "@material-ui/icons/Autorenew";
import { Icon, IconButton } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import { loginimg } from "../../../assets";
import ReCAPTCHA from "react-google-recaptcha";
import LoginVerify from "../Login/Login-Verify/LoginVerify";
import { register } from "../../../store/actions/User-actions";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Message/Message";
import { useHistory } from "react-router";

function Signup(props) {
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [refferalId, setrefferalId] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  const [isValid, setIsValid] = useState(false);
  const [verify, setVerify] = useState(false);

  const [captchaText, setCaptchaText] = useState("");

  function createCaptcha() {
    let captcha = new Array();

    for (let q = 0; q < 6; q++) {
      if (q % 2 == 0) {
        captcha[q] = String.fromCharCode(Math.floor(Math.random() * 26 + 65));
      } else {
        captcha[q] = Math.floor(Math.random() * 10 + 0);
      }
    }
    let theCaptcha = captcha.join("");
    setCaptchaText(theCaptcha);
  }

  useEffect(() => {
    createCaptcha();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (captchaInput !== captchaText) {
      alert("Sorry captcha doesn't match");
      createCaptcha();
      return;
    }
    dispatch(register(name, email, mobile, password, refferalId));
    if (error) {
      handleChange();
      props.handleChange(e, "mobile");
    }
  };

  const handleChange = () => {
    setVerify(!verify);
  };

  const handleRecaptcha = (e) => {
    setIsValid(true);
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
      {props.showLogin === "open" &&
        props.modalComponent === "signup" &&
        !verify && (
          <div
            className={styles.signup}
            onClick={isMobile ? props.handleClick : undefined}
          >
            <div className={styles.signup__container}>
              <div className={styles.signup__content}>
                <div className={styles.signup__image_content}>
                  <img src={loginimg} alt="" />
                  <div className={styles.signup__image_content_text}>
                    <h4>Welcome to Priceagain</h4>
                    <p>Join now and get</p>
                    <p>₹50 welcome bonus </p>
                  </div>
                </div>

                <div className={styles.signup__form_content}>
                  <h2>Create a New Account</h2>
                  {error && <Message error={true} message={error} />}
                  <form onSubmit={submitHandler}>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <input
                      type="email"
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
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </span>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      pattern="[0-9]{10}"
                      placeholder="Mobile"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      name="referal"
                      id="referal"
                      placeholder="Referral ID (optional)"
                      value={refferalId}
                      onChange={(e) => setrefferalId(e.target.value)}
                    />
                    <div className={styles.captchaInput}>
                      <input
                        type="text"
                        name="captcha"
                        id="captcha"
                        placeholder="Captcha"
                        value={captchaInput}
                        onChange={(e) => setCaptchaInput(e.target.value)}
                      />
                      <label>{captchaText}</label>
                      <IconButton onClick={createCaptcha}>
                        <Autorenew />
                      </IconButton>
                    </div>

                    <div className={styles.signup__forgot_password}>
                      <span>
                        <input type="checkbox" name="keepsignedin" />
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

                    <button type="submit">Create an Account</button>
                  </form>

                  <div className={styles.signup__footer}>
                    <h4>
                      Already a member?{" "}
                      <span onClick={(e) => props.handleChange(e, "email")}>
                        Login
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
            mobileNumber={mobile}
            handleClick={props.handleClick}
            handleChange={handleChange}
          />
        )}
    </>
  );
}

export default Signup;
