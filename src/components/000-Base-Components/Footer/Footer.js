import React, { useState } from "react";
import styles from "./Footer.module.css";
import { logo } from "../../../assets/index";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from "@material-ui/icons/Telegram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useMediaQuery } from "react-responsive";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import RemoveRoundedIcon from "@material-ui/icons/RemoveRounded";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Footer({ showLogin, handleClick }) {
  // Changing Icon State
  const [information, setInformation] = useState(false);
  const [contact, setContact] = useState(false);
  const [about, setAbout] = useState(false);
  const [policy, setPolicy] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // Information
  const handleInformation = (e) => {
    switch (information) {
      case false:
        setInformation(true);
        break;
      case true:
        setInformation(false);
        break;
      default:
        setInformation(true);
        break;
    }
  };

  // Contact
  const handleContact = (e) => {
    switch (contact) {
      case false:
        setContact(true);
        break;
      case true:
        setContact(false);
        break;
      default:
        setContact(true);
        break;
    }
  };

  // About
  const handleAbout = (e) => {
    switch (about) {
      case false:
        setAbout(true);
        break;
      case true:
        setAbout(false);
        break;
      default:
        setAbout(true);
        break;
    }
  };

  // Policy
  const handlePolicy = (e) => {
    switch (policy) {
      case false:
        setPolicy(true);
        break;
      case true:
        setPolicy(false);
        break;
      default:
        setPolicy(true);
        break;
    }
  };

  return (
    <div className={styles.footer}>
      {!isMobile && (
        <div className={styles.footer__res}>
          <div className={styles.footer__container}>
            <div
              className={`${styles.footer__content_1} ${styles.footer__content}`}
            >
              <div className={styles.footer__content_image_container}>
                <img src={logo} alt="" />
              </div>

              <p>
                When you go to any online site, like Amazon or clicking out from
                Priceagain and shop, we get paid a marketing fee. We pass{" "}
              </p>

              <span>Get Connected</span>

              <div className={styles.footer__content_social_media}>
                <a href="#">
                  <FacebookIcon />
                </a>
                <a href="#">
                  <InstagramIcon />
                </a>
                <a href="#">
                  <TwitterIcon />
                </a>
                <a href="#">
                  <TelegramIcon />
                </a>
                <a href="#">
                  <LinkedInIcon />
                </a>
              </div>
            </div>

            <div
              className={`${styles.footer__content_2} ${styles.footer__content}`}
            >
              <p>Information</p>
              <ul>
                <li>About Priceagain</li>
                <li>
                  <Link to="/invite">Refer & Earn</Link>
                </li>
                <li>
                  <Link to="/how-to-earn-cashback">How to get cashback</Link>
                </li>
                <li>
                  <Link to="/frequenty-asked-question">FAQ</Link>
                </li>
                {!userInfo ? (
                  <li onClick={handleClick}>Log in</li>
                ) : (
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                )}
              </ul>
            </div>

            <div
              className={`${styles.footer__content_3} ${styles.footer__content}`}
            >
              <p>Reach Us At</p>

              <a href="mailto:care@priceagain.com">
                <MailOutlineIcon /> care@priceagain.com
              </a>
              <a href="tel:+91 9677999958">
                <WhatsAppIcon /> +91 9677999958
              </a>

              <span>Get Exclusive Offers</span>

              <div className={styles.footer__email_input}>
                <input type="email" placeholder="Enter your e-mail" />
                <button>
                  <ChevronRightIcon />
                </button>
              </div>
            </div>
          </div>
          {!isTabletOrMobile ? (
            <div className={styles.footer__copyright}>
              <p>
                Copyright © 2022 Priceagain. All Rights Reserved. CIN:
                U72900TN2020PTC13897
              </p>
              <p>
                Anti Spam Policy | Privacy & Cookie Policy | Terms Of Service
              </p>
            </div>
          ) : (
            <div className={styles.footer_mob__copyright}>
              <p>© 2022 Priceagain</p>
            </div>
          )}
        </div>
      )}

      {isMobile && (
        <div className={styles.footer__container}>
          <div className={styles.footer__content_image_container}>
            <img src={logo} alt="" />
          </div>

          <div className={styles.footer__text_container}>
            {/* Information */}
            <span onClick={handleInformation}>
              Information
              {!information ? (
                <AddRoundedIcon style={{ fontSize: 40 }} />
              ) : (
                <RemoveRoundedIcon style={{ fontSize: 40 }} />
              )}
            </span>
            {information && (
              <div className={styles.footer__information}>
                <ul>
                  <li>About Priceagain</li>
                  <li>
                    <Link to="/invite">Refer & Earn</Link>
                  </li>
                  <li>
                    <Link to="/how-to-earn-cashback">How to get cashback</Link>
                  </li>
                  <li>
                    <Link to="/frequenty-asked-question">FAQ</Link>
                  </li>
                  {!userInfo ? (
                    <li onClick={handleClick}>Log in</li>
                  ) : (
                    <li>
                      <Link to="/contact-us">Contact Us</Link>
                    </li>
                  )}
                </ul>
              </div>
            )}

            {/* React Us Out */}
            <span onClick={handleContact}>
              Reach Us At
              {!contact ? (
                <AddRoundedIcon style={{ fontSize: 40 }} />
              ) : (
                <RemoveRoundedIcon style={{ fontSize: 40 }} />
              )}
            </span>
            {contact && (
              <div className={styles.footer__contact}>
                <a href="mailto:care@priceagain.com">
                  <MailOutlineIcon /> care@priceagain.com
                </a>
                <a href="tel:+91 9677999958">
                  <WhatsAppIcon /> +91 9677999958
                </a>
              </div>
            )}

            {/* About */}
            <span onClick={handleAbout}>
              About
              {!about ? (
                <AddRoundedIcon style={{ fontSize: 40 }} />
              ) : (
                <RemoveRoundedIcon style={{ fontSize: 40 }} />
              )}
            </span>
            {about && (
              <div className={styles.footer__about}>
                <p>
                  When you go to any online site, like Amazon or clicking out
                  from Priceagain and shop, we get paid a marketing fee. We pass{" "}
                </p>
              </div>
            )}

            {/* Polixy */}
            <span onClick={handlePolicy}>
              Policy
              {!policy ? (
                <AddRoundedIcon style={{ fontSize: 40 }} />
              ) : (
                <RemoveRoundedIcon style={{ fontSize: 40 }} />
              )}
            </span>
            {policy && (
              <div className={styles.footer__policy}>
                <ul>
                  <li>Anti Spam Policy</li>
                  <li>Privacy & Cookie Policy</li>
                  <li>Terms Of Service</li>
                </ul>
              </div>
            )}
          </div>

          <div className={styles.footer__email_container}>
            <p>Get Exclusive Offers</p>
            <div className={styles.footer__email_input}>
              <input type="email" placeholder="Enter your e-mail" />
              <button>
                <ChevronRightIcon />
              </button>
            </div>
          </div>

          <div className={styles.footer__content_social_media}>
            <a href="#">
              <FacebookIcon style={{ fontSize: 34 }} />
            </a>
            <a href="#">
              <InstagramIcon style={{ fontSize: 34 }} />
            </a>
            <a href="#">
              <TwitterIcon style={{ fontSize: 34 }} />
            </a>
            <a href="#">
              <TelegramIcon style={{ fontSize: 34 }} />
            </a>
            <a href="#">
              <LinkedInIcon style={{ fontSize: 34 }} />
            </a>
          </div>

          <div>
            <div className={styles.footer_mob__copyright}>
              <p>© 2022 Priceagain</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
