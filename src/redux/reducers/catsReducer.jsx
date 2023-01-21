import {SET_CATS, SET_LOADING} from "../actions/catsActions"

const initialSTate = {
  isLoading: false,
  cats: [],
  favouriteCats: [],
};

const catReducer = (state = initialSTate, action) => {
  switch (action.type) {
    case SET_CATS:
      return {
        ...state,
        cats: action.payload,
      };
    case SET_LOADING:
        return {
         ...state,
          isLoading: action.payload,
        };
    default:
      return state;
  }
};

export default catReducer;