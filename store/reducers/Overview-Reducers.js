import {
  CONTACT_US_REQUEST,
  CONTACT_US_SUCCESS,
  CONTACT_US_FAIL,
  GET_RECENT_CLICKS_REQUEST,
  GET_RECENT_CLICKS_SUCCESS,
  GET_RECENT_CLICKS_FAIL,
  EARNINGS_OVERVIEW_REQUEST,
  EARNINGS_OVERVIEW_SUCCESS,
  EARNINGS_OVERVIEW_FAIL,
} from "../constants/Overview-Constants";

export const earningsOverviewReducer = (state = [], action) => {
  switch (action.type) {
    case EARNINGS_OVERVIEW_REQUEST:
      return {
        loading: true,
      };

    case EARNINGS_OVERVIEW_SUCCESS:
      return {
        loading: false,
        earnings: action.payload,
      };

    case EARNINGS_OVERVIEW_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const recentClicksReducer = (state = [], action) => {
  switch (action.type) {
    case GET_RECENT_CLICKS_REQUEST:
      return {
        loading: true,
      };

    case GET_RECENT_CLICKS_SUCCESS:
      return {
        loading: false,
        recentclick: action.payload,
      };

    case GET_RECENT_CLICKS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const contactUsReducer = (state = {}, action) => {
  switch (action.type) {
    case CONTACT_US_REQUEST:
      return { loading: true };
    case CONTACT_US_SUCCESS:
      return { loading: false, message: action.payload };
    case CONTACT_US_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
