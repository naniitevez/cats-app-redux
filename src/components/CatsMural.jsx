import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoading, fetchCats } from "../redux/actions/catsActions";

const CatsMural = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
console.log(store)
  return (
    <div>
      <button onClick={() => dispatch(fetchCats())}>SET CATS</button>
      <button onClick={() => dispatch(setLoading(true))}>
        SET LOADING TRUE
      </button>
      <button onClick={() => dispatch(setLoading(false))}>
        SET LOADING FALSE
      </button>
      {store.isLoading.toString()}
    </div>
  );
};

export default CatsMural;
