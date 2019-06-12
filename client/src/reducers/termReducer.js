const initialState = {
  // term: "pizza"
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_TERM":
      return { ...state, payload };

    default:
      return state;
  }
};
