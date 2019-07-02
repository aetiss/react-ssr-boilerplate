import { combineReducers } from "redux";
import collections from "./collectionsReducer";
import trendingProducts from "./trendingProductsReducer";

export default combineReducers({
  collections,
  trendingProducts
});
