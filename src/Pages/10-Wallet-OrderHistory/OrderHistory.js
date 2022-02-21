import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { Navbar_Bottom, OrderHistoryInfo, Sidebar } from "../../components";
import styles from "./OrderHistory.module.css";
import axios from "../../axios";

function OrderHistory({ history }) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 991px)" });

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [orderHistory, setOrderHistory] = useState([
    {
      customer_out_summary_id: 5,
      comment: null,
      click_user_ip: null,
      currency: "INR",
      website_name: "Priceagain",
      status_updated: "2021-05-25 21:17:53",
      api_id: "705002070",
      advcampaign_id: "15591",
      subid1: null,
      subid3: null,
      subid2: null,
      subid4: null,
      click_user_referer: null,
      click_date: "2021-05-25 21:15:52",
      action_id: "705002070",
      status: "pending",
      order_id: "FL0261817836",
      cart: "189",
      conversion_time: "121",
      paid: "0",
      payment: "16.06",
      click_country_code: "IN",
      advcampaign_name: "Ajio [CPS] IN",
      tariff_id: "6420",
      keyword: null,
      closing_date: null,
      subid: null,
      action_date: "2021-05-25 21:17:53",
      processed: "0",
      action_type: "sale",
      action: "New (8.5 % )& Old (4.25%) - 8.5%",
      customer_cb: "9.45",
      referral_cb: "0.95",
      customer_id: 13,
    },
    {
      customer_out_summary_id: 6,
      comment: null,
      click_user_ip: null,
      currency: "INR",
      website_name: "Priceagain",
      status_updated: "2021-05-25 21:01:56",
      api_id: "704996345",
      advcampaign_id: "15591",
      subid1: null,
      subid3: null,
      subid2: null,
      subid4: null,
      click_user_referer: null,
      click_date: "2021-05-25 19:18:55",
      action_id: "704996345",
      status: "pending",
      order_id: "FL0261787778",
      cart: "346",
      conversion_time: "6181",
      paid: "1",
      payment: "29.41",
      click_country_code: "IN",
      advcampaign_name: "Ajio [CPS] IN",
      tariff_id: "6420",
      keyword: null,
      closing_date: null,
      subid: null,
      action_date: "2021-05-25 21:01:56",
      processed: "1",
      action_type: "sale",
      action: "New (8.5 % )& Old (4.25%) - 8.5%",
      customer_cb: "17.30",
      referral_cb: "1.73",
      customer_id: 13,
    },
    {
      customer_out_summary_id: 8,
      comment: null,
      click_user_ip: null,
      currency: "INR",
      website_name: "Priceagain",
      status_updated: "2021-06-06 15:43:27",
      api_id: "709783141",
      advcampaign_id: "15591",
      subid1: null,
      subid3: null,
      subid2: null,
      subid4: null,
      click_user_referer: "http://127.0.0.1:8000/redirection/MQ==",
      click_date: "2021-06-06 15:41:16",
      action_id: "709783141",
      status: "pending",
      order_id: "FL0265405274",
      cart: "2249",
      conversion_time: "131",
      paid: "1",
      payment: "191.16",
      click_country_code: "IN",
      advcampaign_name: "Ajio [CPS] IN",
      tariff_id: "6420",
      keyword: null,
      closing_date: null,
      subid: null,
      action_date: "2021-06-06 15:43:27",
      processed: "1",
      action_type: "sale",
      action: "New (8.5 % )& Old (4.25%) - 8.5%",
      customer_cb: "112.45",
      referral_cb: "11.25",
      customer_id: 13,
    },
    {
      customer_out_summary_id: 9,
      comment: null,
      click_user_ip: null,
      currency: "INR",
      website_name: "Priceagain",
      status_updated: "2021-06-06 16:22:15",
      api_id: "709793338",
      advcampaign_id: "15591",
      subid1: null,
      subid3: null,
      subid2: null,
      subid4: null,
      click_user_referer: "http://127.0.0.1:8000/redirection/MQ==",
      click_date: "2021-06-06 16:21:05",
      action_id: "709793338",
      status: "pending",
      order_id: "FL0265395936",
      cart: "409",
      conversion_time: "68",
      paid: "0",
      payment: "34.76",
      click_country_code: "IN",
      advcampaign_name: "Ajio [CPS] IN",
      tariff_id: "6420",
      keyword: null,
      closing_date: null,
      subid: null,
      action_date: "2021-06-06 16:22:13",
      processed: "0",
      action_type: "sale",
      action: "New (8.5 % )& Old (4.25%) - 8.5%",
      customer_cb: "20.45",
      referral_cb: "2.05",
      customer_id: 13,
    },
    {
      customer_out_summary_id: 10,
      comment: null,
      click_user_ip: null,
      currency: "INR",
      website_name: "Priceagain",
      status_updated: "2021-06-06 16:15:29",
      api_id: "709791404",
      advcampaign_id: "15591",
      subid1: null,
      subid3: null,
      subid2: null,
      subid4: null,
      click_user_referer: "http://127.0.0.1:8000/redirection/MQ==",
      click_date: "2021-06-06 16:13:33",
      action_id: "709791404",
      status: "pending",
      order_id: "FL0265396899",
      cart: "529",
      conversion_time: "116",
      paid: "0",
      payment: "44.96",
      click_country_code: "IN",
      advcampaign_name: "Ajio [CPS] IN",
      tariff_id: "6420",
      keyword: null,
      closing_date: null,
      subid: null,
      action_date: "2021-06-06 16:15:29",
      processed: "0",
      action_type: "sale",
      action: "New (8.5 % )& Old (4.25%) - 8.5%",
      customer_cb: "26.45",
      referral_cb: "2.65",
      customer_id: 13,
    },
    {
      customer_out_summary_id: 11,
      comment: null,
      click_user_ip: null,
      currency: "INR",
      website_name: "Priceagain",
      status_updated: "2021-06-06 17:06:30",
      api_id: "709807457",
      advcampaign_id: "15591",
      subid1: null,
      subid3: null,
      subid2: null,
      subid4: null,
      click_user_referer: "http://127.0.0.1:8000/redirection/MQ==",
      click_date: "2021-06-06 17:05:11",
      action_id: "709807457",
      status: "pending",
      order_id: "FL0265408963",
      cart: "548",
      conversion_time: "79",
      paid: "0",
      payment: "46.58",
      click_country_code: "IN",
      advcampaign_name: "Ajio [CPS] IN",
      tariff_id: "6420",
      keyword: null,
      closing_date: null,
      subid: null,
      action_date: "2021-06-06 17:06:30",
      processed: "0",
      action_type: "sale",
      action: "New (8.5 % )& Old (4.25%) - 8.5%",
      customer_cb: "27.40",
      referral_cb: "2.74",
      customer_id: 13,
    },
  ]);

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
      return;
    }
    const fetchData = async () => {
      const { data } = await axios.post("/api/v1/orderhistory", {
        id: userInfo.data[0].customer_id,
        authToken: userInfo.data[0].token,
      });
      setOrderHistory(data.data);
    };
    // fetchData();
  }, []);

  return (
    <div className={styles.order_history}>
      <div className={styles.order_history__container}>
        {!isMobile && (
          <div className={styles.order_history__previous_page}>
            <Link to="/" className={styles.order_history__previous_page_link}>
              Home /
            </Link>
            Order History
          </div>
        )}

        <div className={styles.order_history__main_content}>
          {!isMobileOrTablet && (
            <div className={styles.order_history__left_content}>
              <Sidebar activeComponent="orderHistory" />
            </div>
          )}

          <div className={styles.order_history__right_content}>
            <OrderHistoryInfo orderHistory={orderHistory} />
          </div>
        </div>
      </div>

      {isMobile && <Navbar_Bottom activeComponent="/account" />}
    </div>
  );
}

export default OrderHistory;
