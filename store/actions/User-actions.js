import axios from "../../axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LOGOUT,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PASSWORD_FAIL,
  USER_UPDATE_PASSWORD_SUCCESS,
  USER_UPDATE_PASSWORD_REQUEST,
} from "../constants/User-Constants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = { email: email, password: password };

    const { data } = await axios.post("/api/v1/login", config);

    if (data.status == 1) {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } else {
      return dispatch({
        type: USER_LOGIN_FAIL,
        payload: data.msg,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const register =
  (name, email, mobile, password, referalId) => async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });

      const config = {
        customer_name: name,
        email: email,
        mobile: mobile,
        password: password,
        referalId: referalId,
      };

      const { data } = await axios.post("/api/v1/userRegister", config);

      if (data.status == 1) {
        localStorage.setItem("userInfo", JSON.stringify(data));
        dispatch({
          type: USER_REGISTER_SUCCESS,
          payload: data,
        });

        // dispatch({
        //     type: USER_LOGIN_SUCCESS,
        //     payload: data,
        //   });
      } else {
        dispatch({
          type: USER_REGISTER_FAIL,
          payload: data.message,
        });
      }
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

export const updateUserProfile = (user) => async (dispatch) => {
  try {
    dispatch({
      type: USER_UPDATE_PROFILE_REQUEST,
    });

    const { data } = await axios.post(`/api/v1/updateprofile`, user);

    if (data.status == 1) {
      dispatch({
        type: USER_UPDATE_PROFILE_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: USER_UPDATE_PROFILE_FAIL,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updateUserPassword = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_PASSWORD_REQUEST,
    });

    console.log(user);

    const { data } = await axios.post(`/api/v1/changepassword`, user);

    if (data.status == 1) {
      dispatch({
        type: USER_UPDATE_PASSWORD_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: USER_UPDATE_PASSWORD_FAIL,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: USER_UPDATE_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const saveRecentClick = (storeId) => {
  return async (dispatch) => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    const { data } = await axios.post(`/api/v1/saverecentclicks`, {
      id: user.data[0].customer_id,
      authToken: user.data[0].token,
      store_id: storeId,
    });
  };
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
  window.location.replace("/");
};
