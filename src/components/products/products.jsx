import React from "react";
import UseFetch from "../../assets/hooks/useFetch.jsx";
import Loading from "../Loading/loader.jsx";
import { Link } from "react-router-dom";
export default function products() {
  const { data, error, isLoading } = UseFetch("https://dummyjson.com/products?limit=9");

  if (isLoading) 
    return <Loading />;

  return (
    <>
      {error ? <div className="alert alert-danger">{error}</div> : ""}
      <div className="container text-center p-3">
        <div className="row">
          {data.products.map((product) => {
            return (
              <div key={product.id} className="col-md-6 col-lg-4 p-4">
                <div className="bg-pink text-decoration-none shadow p-3">
                  <img src={product.thumbnail} alt={product.title} />
                  <h4>{product.title}</h4>
                  <Link to={`/product/${product.id}`}>Details</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
