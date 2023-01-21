import axios from "axios";
export const SET_CATS = "SET_CATS";
export const SET_LOADING = "SET_LOADING";

export const setCats = (cats) => {
  return {
    type: SET_CATS,
    payload: cats,
  };
};

export const setLoading = (isLoading) => {
  return {
    type: SET_LOADING,
    payload: isLoading,
  };
};

export const fetchCats = () => {
  return async function (dispatch) {
    const response = await axios.get("https://cataas.com/api/cats?limit=20");

    dispatch({
      type: SET_CATS,
      payload: response.data,
    });
  };
};
