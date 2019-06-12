const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SAVE_RECIPE":
      return { ...state, payload };

    default:
      return state;
  }
};
