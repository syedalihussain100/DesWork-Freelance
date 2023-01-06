import {
  REGISTER_SUCCESSFULL,
  REGISTER_FAIL,
  LOGIN_SUCCESSFULL,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  LOAD_SUCCESS,
  LOAD_FAIL,
  REGISTER_ADD_DATABASE
} from "../constant/userConstant";

export const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case REGISTER_SUCCESSFULL:
    case LOGIN_SUCCESSFULL:
    case LOAD_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };

    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOAD_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case LOGOUT_SUCCESS:
      return {
        isAuthenticated: false,
        user: null,
      };

    case LOGOUT_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
