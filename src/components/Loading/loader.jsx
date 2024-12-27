import React from "react";


export default function loader() {
  return (
    <>
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      </div>
    </>
  );
}