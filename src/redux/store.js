import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./reducers/user";
// import { registerUserDatabase } from "./reducers/registerReducer";

const reducer = combineReducers({
  user: userReducer,
  // database: registerUserDatabase
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
