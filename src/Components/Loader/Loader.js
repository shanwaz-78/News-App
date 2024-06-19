import React from "react";
import './css/Loader.css'; 

function Loader() {
  return (
    <div className="loader-container d-flex justify-content-center align-items-center">
      <div className="loader-wrapper text-center p-4">
        <h3>Loading...</h3>
        <div className="spinner-border text-primary mt-3" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
