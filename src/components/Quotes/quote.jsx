import React from "react";
import UseFetch from "../../assets/hooks/useFetch.jsx";
import Loading from "../Loading/loader.jsx";

export default function quote() {
  const { data, error, isLoading } = UseFetch('https://dummyjson.com/quotes/random');

  if (isLoading)
     return <Loading />;
  return (
    <>
      {error ? <div className="alert alert-danger">{error}</div> : ''}
      <div className="container text-center p-3">
        <div className="row">
          <div className="col-12 shadow p-3">
            <p>{data.quote}</p>
            <p className="fw-bold">{data.author}</p>
          </div>
        </div>
      </div>
    </>
  );
}
