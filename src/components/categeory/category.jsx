import React from "react";
import UseFetch from "../../assets/hooks/useFetch.jsx";
import Loading from "../Loading/loader.jsx";
import { Link } from "react-router-dom";

export default function category() {
  const { data, error, isLoading } = UseFetch('https://dummyjson.com/products/category-list');

  if (isLoading) 
    return <Loading />;

  return (
    <>
      {error ? <div className="alert alert-danger">{error}</div> : ""}
      <div className="container text-center p-3">
        <div className="row">
          {data.map((category) => {
            return (
              <div className="col-md-4  p-3">
                <div className="bg-pink shadow p-3 rounded h-100">
                  <Link
                    className="text-decoration-none text-dark "
                    to={`/categoryProduct/${category}`}
                  >
                    <h4>{category}</h4>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
