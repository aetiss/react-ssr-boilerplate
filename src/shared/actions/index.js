import Axios from "axios";
import * as constants from "../constants";

const bestBuyApi = Axios.create({
  baseURL: "https://api.bestbuy.com/beta/"
});

export const mostViewedProducts = () => async dispatch => {
  const response = await bestBuyApi.get(`products/mostViewed?apiKey=${constants.API_KEY}&callback=JSON_CALLBACK`);
  // console.log("most Viewed:", response.data.results);

  dispatch({
    type: "FETCH_MOST_VIEWED_PRODUCTS",
    payload: response.data.results
  });
};

export const fetchInitialData = () => {
  return dispatch => {
    // dispatch(fetchCollections());
    dispatch(mostViewedProducts());
  };
};
