import React from "react";

const Welcome_msg = ({ handleOnClick }) => {
  return (
    <center>
      <div>
        <h1 className="py-4">hello</h1>
        <button
          type="button"
          onClick={handleOnClick}
          className="btn btn-primary"
        >
          check posts..
        </button>
      </div>
    </center>
  );
};

export default Welcome_msg;
