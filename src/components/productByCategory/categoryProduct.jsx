import React from "react";
import { useParams } from "react-router-dom";
import UseFetch from "../../assets/hooks/useFetch.jsx";
import Loading from "../Loading/loader.jsx";

export default function categoryProduct() {
  const { category } = useParams();

  const { data, error, isLoading } = UseFetch(
    `https://dummyjson.com/products/category/${category}`
  );

  if (isLoading) return <Loading />;

  return (
    <>
      {error ? <div className="alert alert-danger">{error}</div> : ""}
      <div className="container  p-3">
        <div className="row d-flex justify-content-center align-items-center ">
          {data.products.map((product) => {
            return (
              <div className=" col-lg-4 p-3">
                <div
                  key={product.id}
                  className="bg-pink text-center shadow p-3"
                >
                  <h4>{product.title}</h4>
                  <img src={product.thumbnail} alt={product.title} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
