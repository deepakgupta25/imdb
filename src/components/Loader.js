import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-holder">
      <div className="spinner">
        <div className="loader" />
      </div>
    </div>
  );
}

export default Loader;