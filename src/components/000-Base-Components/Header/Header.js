import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { logo } from "../../../assets/images/index.js";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import LoginEmail from "../Login/Login-Email/LoginEmail";
import LoginMobile from "../Login/Login-Mobile/LoginMobile";
import { useMediaQuery } from "react-responsive";
import Signup from "../Signup/Signup";
import Forgot_Password from "../Forgot_Password/Forgot_Password";
import Main_Sidebar from "../Main-Sidebar/Main_Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/actions/User-actions";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import axios from "../../../axios";

function Header({ showLogin, handleClick, modalComponent, handleChange }) {
  const history = useHistory();
  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });
  const [searchValue, setSearchValue] = useState("");
  const [searchData, setSearchData] = useState();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  const changeHandler = async (e) => {
    setSearchValue(e.target.value);
    const key = e.target.value;
    if (key.length === 0) {
      return setSearchData([]);
    }
    const { data } = await axios.post("/api/v1/search", {
      key: key,
    });
    if (data.status == 1) {
      setSearchData(data.data);
    }
  };

  const handleClickLink = (e, type, name, id) => {
    e.preventDefault();
    history.push(`/${type}/${name}/${id}/`);
    setSearchData([]);
    setSearchValue("");
  };

  return (
    <div className={styles.header__container}>
      <div className={styles.header}>
        <div className={styles.header__menu_icon}>
          <Main_Sidebar />
        </div>

        <div className={styles.header__image_container}>
          <Link to="/">
            <img className={styles.header__logo} src={logo} alt="" />
          </Link>
        </div>

        <div className={styles.header__search_box}>
          <form>
            <input
              value={searchValue}
              onChange={(e) => changeHandler(e)}
              type="text"
              placeholder="Search Cash Back Stores, coupons and products"
            />
            <div className={styles.header__search_logo_box}>
              <span></span>
            </div>
          </form>
          <ul className={styles.header__dataResults}>
            {searchData &&
              searchData.map((data, index) => (
                <li
                  key={index}
                  onClick={(e) =>
                    handleClickLink(e, data.type, data.name, data.id)
                  }
                >
                  <p>{data.name}</p>
                  <span>{data.type}</span>
                </li>
              ))}
          </ul>
        </div>

        <div className={styles.header__text}>
          <Link to="/how-to-earn-cashback">How it works?</Link>
        </div>

        {!userInfo && (
          <div className={styles.header__button}>
            <button onClick={handleClick}>Login/Register</button>
          </div>
        )}

        <div className={styles.header__login_logo}>
          {!userInfo && <PermIdentityIcon onClick={handleClick} />}
        </div>

        {userInfo && (
          <div className={styles.header__login_logo_user}>
            <PermIdentityIcon />
            <div className={styles.header__log}>
              <p>{userInfo?.data[0].customer_name}</p>
              <span>$0.00</span>
            </div>
            <div className={styles.hover_content}>
              <span>
                <Link to="/overview">
                  <AccountCircleIcon />
                  Account
                </Link>
              </span>
              <span onClick={logoutHandler}>
                <ExitToAppIcon />
                Sign out
              </span>
            </div>
          </div>
        )}
      </div>

      {!userInfo && (
        <>
          <LoginEmail
            showLogin={showLogin}
            modalComponent={modalComponent}
            handleClick={handleClick}
            handleChange={handleChange}
          />

          <LoginMobile
            showLogin={showLogin}
            modalComponent={modalComponent}
            handleClick={handleClick}
            handleChange={handleChange}
          />

          <Signup
            showLogin={showLogin}
            modalComponent={modalComponent}
            handleClick={handleClick}
            handleChange={handleChange}
          />

          <Forgot_Password
            showLogin={showLogin}
            modalComponent={modalComponent}
            handleClick={handleClick}
            handleChange={handleChange}
          />
        </>
      )}
    </div>
  );
}

export default Header;
