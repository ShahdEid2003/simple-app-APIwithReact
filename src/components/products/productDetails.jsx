import React from "react";
import { useParams } from "react-router-dom";
import UseFetch from "../../assets/hooks/useFetch.jsx";
import Loading from "../Loading/loader.jsx";

export default function productDetails() {
  const { id } = useParams();

  const { data, error, isLoading } = UseFetch(
    `https://dummyjson.com/products/${id}`
  );

  if (isLoading) return <Loading />;

  return (
    <>
      { error ? <div className="alert alert-danger">{error}</div> : ""}
      <div className="container text-center p-3">
        <div className="row d-flex justify-content-center align-items-center vh-100">
          <div className="col-md-6">
            <div className=" bg-pink shadow p-3">
              <h4>{data.title}</h4>
              <img src={data.thumbnail} alt={data.title} />
              <p>{data.description}</p>
              <h5>Price: ${data.price}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
{/* <div className="col-md-6   shadow p-3">
{data.images.map((img) =>{return <img src={img} className="w-25"/>})}
</div> */}