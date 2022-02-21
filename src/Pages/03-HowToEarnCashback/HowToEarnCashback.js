import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CashbackSteps, Navbar_Bottom } from "../../components";
import styles from "./HowToEarnCashback.module.css";
import {
  cashbackImg1,
  cashbackImg2,
  cashbackImg3,
  cashbackImg4,
  cashbackImg5,
} from "../../assets/index";
import { useMediaQuery } from "react-responsive";

function HowToEarnCashback() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [cashbackSteps, setCashbackSteps] = useState([
    {
      StepNumber: "01",
      Step: "Register / Login to Priceagain",
      StepInfo:
        "It's 100% Free. Join using Facebook or Email ID. Remember, if you don't sign in you won't earn any cashback.",
      StepImage: <img src={cashbackImg1} alt="" />,
    },
    {
      StepNumber: "02",
      Step: "Click on a Cashback Deal You Like",
      StepInfo:
        "Search for the retailer you want & just click on the 'Activate Cashback' button. You will be taken to the retailer's site. Coupon Codes are shown automatically for extra savings",
      StepImage: <img src={cashbackImg2} alt="" />,
    },
    {
      StepNumber: "03",
      Step: "Shop at the Retailer",
      StepInfo:
        "Shop like you always do. Priceagain will automatically track your purchase & Cashback",
      StepImage: <img src={cashbackImg3} alt="" />,
    },
    {
      StepNumber: "04",
      Step: "Get Cashback Automatically",
      StepInfo:
        "Cashback is added to your Account in Pending status within a few hours. After the return period ends, Cashback status will automatically change to Confirmed",
      StepImage: <img src={cashbackImg4} alt="" />,
    },
    {
      StepNumber: "05",
      Step: "Transfer Your Money",
      StepInfo:
        "Once you have ₹250 or more Confirmed Cashback, redeem Cashback to your Bank Account or as Amazon/Flipkart Gift cards",
      StepImage: <img src={cashbackImg5} alt="" />,
    },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.earn_cashback}>
      <div className={styles.earn_cashback__container}>
        <div className={styles.earn_cashback__previous_page}>
          <Link to="/" className={styles.product__previous_page_link}>
            Home /
          </Link>
          How it works?
        </div>

        <div className={styles.earn_cashback__heading}>
          <h1>HOW TO EARN CASHBACK</h1>
        </div>

        <div className={styles.earn_cashback__steps}>
          {cashbackSteps.map((cashbackstep, index) => (
            <CashbackSteps
              key={index}
              StepNumber={cashbackstep.StepNumber}
              Step={cashbackstep.Step}
              StepInfo={cashbackstep.StepInfo}
              StepImage={cashbackstep.StepImage}
            />
          ))}
        </div>
      </div>

      {isMobile && <Navbar_Bottom activeComponent="/how-to-earn-cashback" />}
    </div>
  );
}

export default HowToEarnCashback;
