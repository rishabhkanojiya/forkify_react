const initialState = {
  payload: [],
  isLoading: false,
  error: {}
};

export default (state = initialState, { type, payload, error }) => {
  switch (type) {
    case "FETCH_SAVE_INGRE":
      return { ...state, isLoading: true };

    case "FETCH_SAVE_INGRE_SUCCESS":
      return { ...state, payload, isLoading: false };

    case "FETCH_SAVE_INGRE_FAILURE":
      return { ...state, error: error, isLoading: false };

    default:
      return state;
  }
};
