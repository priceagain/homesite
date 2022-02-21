import { LOGIN_MODAL_TOGGLE } from "../constants/Login-Constants";

export const loginModalToggle = (value) => {
  return {
    type: LOGIN_MODAL_TOGGLE,
    value,
  };
};
