import {
  REGISTER_ADD_DATABASE,
  REGISTER_DATABASE_ERROR,
} from "../constant/userConstant";

export const registerUserDatabase =
  (state = { database: {} }, action) => {
    switch (action.type) {
      case REGISTER_ADD_DATABASE:
        return {
          ...state,
          register: action.payload,
        };

      case REGISTER_DATABASE_ERROR:
        return {
          ...state,
          error: action.payload,
          register: null,
        };

      default:
        return state;
    }
  };
