import React from "react";

const Container = ({ children }) => {
  return (
    <>
      <div
        className="card relative left-[30rem] top-[2rem]"
        style={{ width: "20rem" }}
      >
        <div className="card-body">{children}</div>
      </div>
    </>
  );
};

export default Container;
