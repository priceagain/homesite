import {
  LANDING_PAGE_LIST_REQUEST,
  LANDING_PAGE_LIST_SUCCESS,
  LANDING_PAGE_LIST_FAIL,
  //
  BANNER_IMAGE_REQUEST,
  BANNER_IMAGE_SUCCESS,
  BANNER_IMAGE_FAIL,
} from "../constants/LandingPage-Constants";

export const landingPageReducer = (state = [], action) => {
  switch (action.type) {
    case LANDING_PAGE_LIST_REQUEST:
      return { loading: true, data: [] };

    case LANDING_PAGE_LIST_SUCCESS:
      return {
        loading: false,
        topCategories: action.payload.data[0],
        topProductDetails: action.payload.data[1],
        topStores: action.payload.data[2],
        topSellingItems: action.payload.data[3],
      };

    case LANDING_PAGE_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const bannerImageReducer = (banner = [], action) => {
  switch (action.type) {
    case BANNER_IMAGE_REQUEST:
      return { loading: true, banner: [] };

    case BANNER_IMAGE_SUCCESS:
      return {
        loading: false,
        banner: action.payload.data,
      };

    case BANNER_IMAGE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return banner;
  }
};
