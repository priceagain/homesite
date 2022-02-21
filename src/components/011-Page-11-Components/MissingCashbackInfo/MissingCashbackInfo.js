import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import styles from "./MissingCashbackInfo.module.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";

// react-datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateRangeIcon from "@material-ui/icons/DateRange";
import MissingCashbackTransactionDetails from "../MissingCashbackTransactionDetails/MissingCashbackTransactionDetails";
import MissingCashbackDetails from "../MissingCashbackDetails/MissingCashbackDetails";

const useStyles = makeStyles((theme) => ({
  formControl: {
    maxWidth: 380,
    width: "100%",
    marginTop: 32,
    marginRight: 10,
  },
}));

function MissingCashbackInfo() {
  const classes = useStyles();
  const [startDate, setStartDate] = useState(null);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [componentType, setComponentType] = useState("information");
  const [retailers, setRetailers] = useState([
    "Amazon",
    "Flipkart",
    "SnapDeal",
  ]);

  const handleComponent = (e) => {
    e.preventDefault();
    if (componentType === "information") {
      return setComponentType("form");
    }

    return setComponentType("information");
  };

  return (
    <div className={styles.missing_cashbackinfo}>
      <div className={styles.missing_cashbackinfo__text_heading}>
        <h1>
          {isMobile && (
            <Link to="/overview">
              <ChevronLeftIcon />
            </Link>
          )}
          Missing cashback/rewards ticket
        </h1>
      </div>

      {componentType == "information" ? (
        <div className={styles.missing_cashbackinfo__container}>
          <div className={styles.missing_cashbackinfo__text_content}>
            <p>
              If you did a transaction via Priceagain & did not get the
              qualifying Cashback/Rewards, don't worry! Just raise a Missing
              Cashback/Rewards ticket & our team will escalate your transaction
              to the retailer. Please note that retailers only accept Missing
              Cashback/Rewards claims for the last 10 days..
            </p>
          </div>

          <div
            onClick={handleComponent}
            className={styles.missing_cashbackinfo__button}
          >
            <span>Add Ticket</span>
          </div>

          {!isMobile && (
            <p className={styles.missing_cashbackinfo__para}>
              There are no missing Cashback/Rewards tickets submitted.
            </p>
          )}
        </div>
      ) : (
        <>
          <div className={styles.missing_cashbackinfo__form_container}>
            <div className={styles.missing_cashbackinfo__date_picker}>
              <div className={styles.missing_cashbackinfo__date}>
                <label>
                  <DatePicker
                    className={styles.missing_cashbackinfo__calender}
                    placeholderText="Enter the date of transaction"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                  <DateRangeIcon />
                </label>
              </div>
            </div>
            {/* 
            <div>
              <div>
                <FormControl className={classes.formControl}>
                  <InputLabel className={styles.missing_cashbackinfo__label}>
                    Retailer You Shopped At
                  </InputLabel>
                  <Select className={styles.missing_cashbackinfo__select}>
                    {retailers.map((retailer, index) => (
                      <MenuItem key={index} value={retailer}>
                        {retailer}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div> */}
          </div>

          <div className={styles.missing_cashbackinfo__transaction_details}>
            <MissingCashbackTransactionDetails startDate={startDate} />
          </div>

          <div className={styles.missing_cashbackinfo__details}>
            <MissingCashbackDetails />
          </div>
        </>
      )}
    </div>
  );
}

export default MissingCashbackInfo;
