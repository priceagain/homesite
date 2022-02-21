import axios from "../../axios";
import {
  TRENDING_STORE_LIST_REQUEST,
  TRENDING_STORE_LIST_SUCCESS,
  TRENDING_STORE_LIST_FAIL,
} from "../constants/TrendingStore-Constants";

export const trendingStorePageList = () => async (dispatch) => {
  try {
    dispatch({ type: TRENDING_STORE_LIST_REQUEST });

    const { data } = await axios.get("/api/v1/store");

    dispatch({
      type: TRENDING_STORE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TRENDING_STORE_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const AllProductsPageList = () => async (dispatch) => {
  try {
    dispatch({ type: TRENDING_STORE_LIST_REQUEST });

    const { data } = await axios.get("/api/v1/store");

    dispatch({
      type: TRENDING_STORE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TRENDING_STORE_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
