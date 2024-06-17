import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputNumber = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAddition = () => {
    const value = inputNumber.current.value;
    inputNumber.current.value = "";
    dispatch({ type: "ADDITION", payload: value });
  };

  const handleSubstract = () => {
    const value = inputNumber.current.value;
    inputNumber.current.value = "";
    dispatch({ type: "SUBSTRACTION", payload: value });
  };

  const handlePrivate = () => {
    dispatch({ type: "PRIVATE" });
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          onClick={handleIncrement}
          type="button"
          className="btn btn-outline-primary btn-lg px-4 gap-3"
        >
          +1
        </button>

        <button
          onClick={handleDecrement}
          type="button"
          className="btn btn-outline-secondary btn-lg px-4"
        >
          -1
        </button>
        <button
          onClick={handlePrivate}
          type="button"
          className="btn btn-warning"
        >
          Private
        </button>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label"></label>
        <input
          ref={inputNumber}
          type="number"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text"></div>
      </div>
      <button
        onClick={handleAddition}
        type="button"
        className="btn btn-success py-1"
      >
        Add
      </button>
      <button
        onClick={handleSubstract}
        type="button"
        className="btn btn-danger mt-2 py-1 "
      >
        substract
      </button>
    </>
  );
};

export default Controls;
