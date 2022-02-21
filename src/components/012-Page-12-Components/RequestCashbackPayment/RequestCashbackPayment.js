import React, { useState } from "react";
import styles from "./RequestCashbackPayment.module.css";
import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import RequestCashbackVerify from "../RequestCashbackVerify/RequestCashbackVerify";
import { useSelector } from "react-redux";
import axios from "../../../axios";

const useStyles = makeStyles((theme) => ({
  formControl: {
    maxWidth: 400,
    width: "100%",
  },
}));

function RequestCashbackPayment() {
  const classes = useStyles();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const earningsOverview = useSelector((state) => state.earningsOverview);
  const { earnings } = earningsOverview;

  const [paymentMethod, setPaymentMethod] = useState(["NEFT", "Gift Card"]);
  const [paymentName, setPaymentName] = useState(undefined);
  const [showModal, setshowModal] = useState("close");
  const [otp, setOtp] = useState(new Array(6).fill(""));

  //neft
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [bankName, setBankName] = useState("");
  const [branchName, setBranchName] = useState("");
  const [ifscCode, setIfscCode] = useState("");

  //giftcard
  const [giftCard, setGiftCard] = useState("");
  const [requestAmount, setRequestAmount] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handlePaymentMethod = (e) => {
    e.preventDefault();
    setPaymentName(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    if (paymentName === "NEFT") {
      if (!accountName || !accountNumber || !bankName || !ifscCode) {
        alert("Please enter all the details");
        return;
      }
    } else {
      console.log("hitting");
      if (!giftCard || !requestAmount || !userEmail) {
        alert("Please enter all the details");
        return;
      } else if (
        requestAmount >
        Number(earnings?.data?.cashback?.processed) +
          Number(earnings.data?.referal?.processed)
      ) {
        alert("Sorry you don't have enough amount.");
        return;
      }
    }

    switch (showModal) {
      case "open":
        setshowModal("close");
        break;
      case "close":
        setshowModal("open");
        break;
      default:
        setshowModal("close");
        break;
    }
  };

  const verifyUser = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("/api/v1/otpVerify", {
      mobile: userInfo?.data[0].customer_mobile,
      otp: otp.join(""),
    });

    if (data.status == 1) {
      setshowModal("close");
      return submitPaymentRequest();
    } else {
      alert(data.msg);
    }
  };

  const submitPaymentRequest = async () => {
    if (paymentName === "NEFT") {
      const { data } = await axios.post("/api/v1/paymentrequest", {
        id: userInfo?.data[0].customer_id,
        authToken: userInfo?.data[0].token,
        account_name: accountName,
        bank_name: bankName,
        branch_name: branchName,
        account_no: accountNumber,
        ifsc_code: ifscCode,
        amount:
          Number(earnings?.data?.cashback?.processed) +
          Number(earnings.data?.referal?.processed),
        payment_type: "cashback",
        email: userInfo?.data[0].customer_email,
        mode: paymentName.toLowerCase(),
        gift_card: "",
      });

      alert(data.msg);
    } else {
      const { data } = await axios.post("/api/v1/paymentrequest", {
        id: userInfo?.data[0].customer_id,
        authToken: userInfo?.data[0].token,
        account_name: "",
        bank_name: "",
        branch_name: "",
        account_no: "",
        ifsc_code: "",
        amount: requestAmount,
        payment_type: "cashback",
        email: userEmail,
        mode: paymentName.toLowerCase(),
        gift_card: giftCard,
      });

      alert(data.msg);
    }
    setAccountName("");
    setAccountNumber("");
    setBankName("");
    setBranchName("");
    setGiftCard("");
    setIfscCode("");
    setUserEmail("");
    setRequestAmount("");
  };

  return (
    <div className={styles.request_cashback_payment}>
      {showModal === "close" && (
        <div className={styles.request_cashback_payment__dropdown}>
          <FormControl className={classes.formControl}>
            <InputLabel>Select Payment Method</InputLabel>
            <Select onChange={handlePaymentMethod}>
              {paymentMethod.map((payment, index) => (
                <MenuItem key={index} value={payment}>
                  {payment}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      )}

      {paymentName === "NEFT" && showModal === "close" && (
        <div className={styles.request_cashback_payment__neft__container}>
          <form action="">
            <input
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              type="number"
              id="accountNumber"
              name="Account_Number"
              placeholder="Account Number"
            />
            <input
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              type="text"
              id="accountHolderName"
              name="Account_holder_name"
              placeholder="Account Holder Name"
            />
            <input
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              type="text"
              id="bankName"
              name="Bank_name"
              placeholder="Bank Name"
            />
            <input
              value={branchName}
              onChange={(e) => setBranchName(e.target.value)}
              type="text"
              id="branchName"
              name="Branch_name"
              placeholder="Branch Name"
            />
            <input
              value={ifscCode}
              onChange={(e) => setIfscCode(e.target.value)}
              type="text"
              id="ifscCode"
              name="Ifsc_Code"
              placeholder="IFSC Code"
            />

            <button onClick={handleClick}>Request Cashback</button>
          </form>

          <p>for your security purpose we will verify your mobile number</p>
        </div>
      )}

      {paymentName === "Gift Card" && showModal === "close" && (
        <div className={styles.request_cashback_payment__gift__container}>
          <form action="">
            <div className={styles.request_cashback_payment__radio}>
              <div className={styles.request_cashback_payment__gcard}>
                <input
                  type="radio"
                  id="Amazon_Gift_Card"
                  name="Gift_Card"
                  value="amazon"
                  onChange={(e) => setGiftCard(e.target.value)}
                />
                  <label htmlFor="Amazon_Gift_Card">Amazon Gift Card</label>
              </div>
              <div className={styles.request_cashback_payment__gcard}>
                <input
                  onChange={(e) => setGiftCard(e.target.value)}
                  type="radio"
                  id="Flipkart_Gift_Card"
                  name="Gift_Card"
                  value="flipkart"
                />
                  <label htmlFor="Flipkart_Gift_Card">Flipkart Gift Card</label>
              </div>
            </div>

            <input
              value={requestAmount}
              type="number"
              id="paymentValue"
              name="Payment_Value"
              placeholder="Enter your gift card amount"
              onChange={(e) => setRequestAmount(e.target.value)}
            />

            <div className={styles.request_cashback_payment__email}>
              <label htmlFor="paymentEmail">E-mail</label>
              <input
                value={userEmail}
                type="email"
                id="paymentEmail"
                name="Payment_Email"
                placeholder="johndoe@email.com"
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>

            <button onClick={handleClick}>Request Cashback</button>
          </form>

          <p>for your security purpose we will verify your mobile number</p>
        </div>
      )}

      <RequestCashbackVerify
        mobileNumber={userInfo?.data[0].customer_mobile}
        showModal={showModal}
        otp={otp}
        setOtp={setOtp}
        verifyUser={verifyUser}
      />
    </div>
  );
}

export default RequestCashbackPayment;
