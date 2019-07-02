export default (state = [], action) => {
  if (action.type === "FETCH_TRENDING_PRODUCTS") {
    return action.payload;
  }
  return state;
};
