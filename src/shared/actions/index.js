import trendingProducts from "../Data/products";
import collections from "../Data/collections";

export const fetchTrendingProducts = () => {
  return {
    type: "FETCH_TRENDING_PRODUCTS",
    payload: trendingProducts
  };
};

export const fetchCollections = () => {
  return {
    type: "FETCH_COLLECTIONS",
    payload: collections
  };
};

export const fetchInitialData = () => {
  return dispatch => {
    dispatch(fetchCollections());
    dispatch(fetchTrendingProducts());
  };
};
