const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_INGRE":
      return { ...state, ...payload };

    default:
      return state;
  }
};
