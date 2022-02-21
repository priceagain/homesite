import axios from "../../axios";
import {
  CONTACT_US_REQUEST,
  CONTACT_US_SUCCESS,
  CONTACT_US_FAIL,
  GET_RECENT_CLICKS_REQUEST,
  GET_RECENT_CLICKS_FAIL,
  GET_RECENT_CLICKS_SUCCESS,
  EARNINGS_OVERVIEW_REQUEST,
  EARNINGS_OVERVIEW_SUCCESS,
  EARNINGS_OVERVIEW_FAIL,
} from "../constants/Overview-Constants";

export const earningsOverviewInfo = (id, authToken) => async (dispatch) => {
  try {
    dispatch({ type: EARNINGS_OVERVIEW_REQUEST });

    const conf = {
      id: id,
      authToken: authToken,
    };

    const { data } = await axios.post("/api/v1/overview", conf);

    if (data.status == 1) {
      dispatch({
        type: EARNINGS_OVERVIEW_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: EARNINGS_OVERVIEW_FAIL,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: EARNINGS_OVERVIEW_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const getRecentClicks = (id, authToken) => async (dispatch) => {
  try {
    dispatch({ type: GET_RECENT_CLICKS_REQUEST });

    const conf = {
      id: id,
      authToken: authToken,
    };

    const { data } = await axios.post("/api/v1/recentclicks", conf);

    if (data.status == 1) {
      dispatch({
        type: GET_RECENT_CLICKS_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: GET_RECENT_CLICKS_FAIL,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: GET_RECENT_CLICKS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const contactUs = (name, email, message) => async (dispatch) => {
  try {
    dispatch({
      type: CONTACT_US_REQUEST,
    });

    const conf = {
      name: name,
      email: email,
      message: message,
    };

    const { data } = await axios.post("/api/v1/contactUsEmail", conf);

    if (data.status == 1) {
      dispatch({
        type: CONTACT_US_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: CONTACT_US_FAIL,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: CONTACT_US_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
