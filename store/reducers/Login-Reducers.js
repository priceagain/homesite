import { LOGIN_MODAL_TOGGLE } from "../constants/Login-Constants";

const initialState = {
  showLogin: "close",
};

export const loginModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_MODAL_TOGGLE:
      return {
        showLogin: action.value,
      };
    default:
      return state;
  }
};
