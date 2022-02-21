import axios from "../../axios";
import {
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  PRODUCT_BY_CATEGORY_FAIL,
  PRODUCT_BY_CATEGORY_REQUEST,
  PRODUCT_BY_CATEGORY_SUCCESS,
  STORE_BY_CATEGORY_FAIL,
  STORE_BY_CATEGORY_REQUEST,
  STORE_BY_CATEGORY_SUCCESS,
} from "../constants/Product-Constants";

export const allCategory = () => async (dispatch) => {
  try {
    dispatch({
      type: CATEGORY_LIST_REQUEST,
    });

    const { data } = await axios.get("/api/v1/category");

    if (data.status == 1) {
      dispatch({
        type: CATEGORY_LIST_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: CATEGORY_LIST_FAIL,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: CATEGORY_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const storeByCategory = (conf) => async (dispatch) => {
  try {
    dispatch({
      type: STORE_BY_CATEGORY_REQUEST,
    });

    console.log(conf);

    const { data } = await axios.post("/api/v1/categorybystore", conf);
    console.log(data);
    if (data.status == 1) {
      dispatch({
        type: STORE_BY_CATEGORY_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: STORE_BY_CATEGORY_FAIL,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: STORE_BY_CATEGORY_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const productByCategory = (conf) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_BY_CATEGORY_REQUEST,
    });
    console.log(conf);
    const { data } = await axios.post("/api/v1/productbycategory", conf);
    if (data.status == 1) {
      dispatch({
        type: PRODUCT_BY_CATEGORY_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: PRODUCT_BY_CATEGORY_FAIL,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: PRODUCT_BY_CATEGORY_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
