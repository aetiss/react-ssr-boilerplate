export default (state = [], action) => {
  if (action.type === "FETCH_COLLECTIONS") {
    return action.payload;
  }
  return state;
};
