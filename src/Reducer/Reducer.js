const initialState = {
    comment: "",
    rating: 1,
    shop: "Love Bonito",
    category: "Tops",
  };

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_STATE": {
        return { ...state, ...action.data };
      }
      case "RESET_STATE": {
        return { ...state, ...action.data };
      }
      default:
        return state;
    }
  };

  export default reviewReducer;