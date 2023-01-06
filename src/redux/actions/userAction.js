import { auth, db } from "../../firebase";
import { toast } from "react-toastify";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import {
  LOGIN_SUCCESSFULL,
  LOGIN_FAIL,
  REGISTER_SUCCESSFULL,
  REGISTER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  LOAD_SUCCESS,
  LOAD_FAIL,
  REGISTER_ADD_DATABASE,
  REGISTER_DATABASE_ERROR,
} from "../constant/userConstant";
import { doc, setDoc } from "firebase/firestore";

import Notifcations from "../../Components/Routes/SignupComponents/Notification";

export const register =
  (
    email,
    password,
    FullName,
    Email,
    Category,
    PhoneNumber,
    Address,
    RateType,
    usertype,
    image
  ) =>
  async (dispatch) => {
    try {
      const registerData = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const res = registerData?.user;

      dispatch({ type: REGISTER_SUCCESSFULL, payload: res });

      setDoc(doc(db, "Users", res?.uid), {
        Userid: res?.uid,
        Email: Email,
        FullName: FullName,
        Category: Category,
        PhoneNumber: PhoneNumber,
        Address: Address,
        RateType: RateType,
        usertype: usertype,
        isBlocked: false,
        isVerified: false,
      });

      // dispatch({ type: REGISTER_ADD_DATABASE, payload: data });
      Notifcations(
        res?.uid,
        "User Registeration Request",
        "unread",
        "registeration"
      );

      toast.success("Register Successfully!");
    } catch (error) {
      dispatch({ type: REGISTER_FAIL, payload: error?.message });
      toast.error(error?.message);
    }
  };

export const login = (email, password) => async (dispatch) => {
  try {
    const loginData = await signInWithEmailAndPassword(auth, email, password);
    const data = await loginData?.user;

    dispatch({ type: LOGIN_SUCCESSFULL, payload: data });
    toast.success("Login Successfully!");
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error?.message });
    toast.error(error?.message);
  }
};

export const logout = () => async (dispatch) => {
  try {
    const auth = getAuth();
    const logoutData = await signOut(auth);

    dispatch({ type: LOGOUT_SUCCESS, payload: logoutData });
    toast.success("Logout Successfully!");
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error?.message });
    toast.error(error?.message);
  }
};

export const refresh = () => async (dispatch) => {
  try {
    let auth = getAuth();
    let onAuthData = await onAuthStateChanged(auth, (user) => {
      dispatch({ type: LOAD_SUCCESS, payload: user });
    });

    return onAuthData;
  } catch (error) {
    dispatch({ type: LOAD_FAIL, payload: error?.message });
    toast.error(error?.message);
  }
};
