import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Page2() {
  const Store = useSelector((store) => {
    console.log(store.SecondReducer);
    return store.SecondReducer;
  });
  const dispatch = useDispatch();
  return (
    <>
      <h1>{Store.value}</h1>
      <button
        onClick={() => {
          dispatch({ type: "MULTIBY2", payload: 2 });
        }}
      >
        *2
      </button>
      <button
        onClick={() => {
          dispatch({ type: "MULTIBY5", payload: 5 });
        }}
      >
        *5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DIVIDEBY2", payload: 2 });
        }}
      >
        /2
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DIVIDEBY5", payload: 2 });
        }}
      >
        /5
      </button>
    </>
  );
}
