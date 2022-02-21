import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  bannerImageReducer,
  landingPageReducer,
} from "./reducers/LandingPage-Reducers";
import {
  allProductsPageReducer,
  trendingStorePageReducer,
} from "./reducers/TrendingStore-Reducers";
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdatePasswordReducer,
  userUpdateProfileReducer,
} from "./reducers/User-Reducers";
import {
  contactUsReducer,
  earningsOverviewReducer,
  recentClicksReducer,
} from "./reducers/Overview-Reducers";
import {
  categoryListReducer,
  productByCategoryListReducer,
  storeByCategoryListReducer,
} from "./reducers/Product-Reducer";
import { loginModalReducer } from "./reducers/Login-Reducers";

const reducer = combineReducers({
  landingPage: landingPageReducer,
  bannerImage: bannerImageReducer,
  trendingStore: trendingStorePageReducer,

  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userUpdatePassword: userUpdatePasswordReducer,

  earningsOverview: earningsOverviewReducer,
  contactUs: contactUsReducer,
  recentClicks: recentClicksReducer,

  categoryList: categoryListReducer,
  storeByCategoryList: storeByCategoryListReducer,
  allProductsPage: allProductsPageReducer,
  productByCategoryList: productByCategoryListReducer,

  loginModalStatus: loginModalReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = { userLogin: { userInfo: userInfoFromStorage } };

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
