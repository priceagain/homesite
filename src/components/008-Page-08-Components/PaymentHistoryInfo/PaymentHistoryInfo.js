import React, { useState } from "react";
import styles from "./PaymentHistoryInfo.module.css";
import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 100,
  },
}));

function PaymentHistoryInfo({ paymentHistory }) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const classes = useStyles();

  const [sliceValue, setSliceValue] = useState(10);
  const [entries, setEntries] = useState([10, 20, 30, 40, 50]);

  const handleChangeRows = (e) => {
    e.preventDefault();
    setSliceValue(Number(e.target.value));
  };

  return (
    <div className={styles.paymentInfo}>
      <div className={styles.paymentInfo__heading}>
        <h1>
          {isMobile && (
            <Link to="/overview">
              <ChevronLeftIcon />
            </Link>
          )}{" "}
          Payment History
        </h1>

        {!isMobile && (
          <div className={styles.paymentInfo__top}>
            <div className={styles.paymentInfo__dropdown_container}>
              <span>Show</span>
              <div className={styles.paymentInfo__dropdown}>
                <FormControl className={classes.formControl}>
                  <InputLabel>Entry</InputLabel>
                  <Select onChange={handleChangeRows}>
                    {entries.map((category, index) => (
                      <MenuItem key={index} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <span>entries</span>
            </div>

            {/* <div className={styles.paymentInfo__search_container}>
              <span>Search</span>
              <input type="text" />
            </div> */}
          </div>
        )}

        {!isMobile && (
          <div className={styles.paymentInfo__table_container}>
            <table>
              <thead>
                <tr>
                  <th>
                    <p>Transferred Account No</p>
                  </th>

                  <th>
                    <p>Bank Name</p>
                  </th>

                  <th>
                    <p>Transaction Id</p>
                  </th>

                  <th>
                    <p>Transaction Mode</p>
                  </th>

                  <th>
                    <p>Transaction Date</p>
                  </th>

                  <th>
                    <p>Amount</p>
                  </th>

                  <th>
                    <p>Rewards type</p>
                  </th>
                </tr>
              </thead>

              <tbody>
                {paymentHistory.length > 0 ? (
                  paymentHistory.slice(0, sliceValue).map((payment, index) => (
                    <tr key={index}>
                      <td>{payment.account_no}</td>
                      <td>{payment.bank_name}</td>
                      <td>{payment.transaction_id}</td>
                      <td>{payment.transaction_mode}</td>
                      <td>{payment.transaction_date}</td>
                      <td>{payment.amount}</td>
                      <td>{payment.payment_request_type}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td>No data found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {isMobile && (
          <div className={styles.paymentInfo__table_container}>
            <table>
              <thead>
                <tr>
                  <th>Transferred Account No</th>
                  {paymentHistory.map((payment, index) => (
                    <td key={index}>{payment.account_no}</td>
                  ))}
                </tr>
                <tr>
                  <th>Bank Name</th>
                  {paymentHistory.map((payment, index) => (
                    <td key={index}>{payment.bank_name}</td>
                  ))}
                </tr>
                <tr>
                  <th>Transaction Id</th>
                  {paymentHistory.map((payment, index) => (
                    <td key={index}>{payment.transaction_id}</td>
                  ))}
                </tr>
                <tr>
                  <th>Transaction Mode</th>
                  {paymentHistory.map((payment, index) => (
                    <td key={index}>{payment.transaction_mode}</td>
                  ))}
                </tr>
                <tr>
                  <th>Transaction Date</th>
                  {paymentHistory.map((payment, index) => (
                    <td key={index}>{payment.transaction_date}</td>
                  ))}
                </tr>
                <tr>
                  <th>Amount</th>
                  {paymentHistory.map((payment, index) => (
                    <td key={index}>{payment.amount}</td>
                  ))}
                </tr>
                <tr>
                  <th>Reward type</th>
                  {paymentHistory.map((payment, index) => (
                    <td key={index}>{payment.payment_request_type}</td>
                  ))}
                </tr>
              </thead>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default PaymentHistoryInfo;
