import axios from "../../axios";
import {
  LANDING_PAGE_LIST_REQUEST,
  LANDING_PAGE_LIST_SUCCESS,
  LANDING_PAGE_LIST_FAIL,
  //
  BANNER_IMAGE_REQUEST,
  BANNER_IMAGE_SUCCESS,
  BANNER_IMAGE_FAIL,
} from "../constants/LandingPage-Constants";

export const landingPageList = () => async (dispatch) => {
  try {
    dispatch({ type: LANDING_PAGE_LIST_REQUEST });

    const { data } = await axios.get("/api/v1/landingpage");

    dispatch({
      type: LANDING_PAGE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LANDING_PAGE_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const bannerImage = () => async (dispatch) => {
  try {
    dispatch({ type: BANNER_IMAGE_REQUEST });

    const { data } = await axios.get("/api/v1/banners");
    dispatch({
      type: BANNER_IMAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BANNER_IMAGE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
