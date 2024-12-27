import React from 'react'

export default function addProduct() {
  return (
    <>
      <div className="container ">
        <div className="row d-flex justify-content-center align-items-center vh-100">
            <div className="col-10 shadow p-5">
                <h2>Add New Product</h2>
                <form>
                  <div className="form-group p-2">
                    <label for="productName">Product Name:</label>
                    <input type="text" className="form-control" id="productName" placeholder="Enter product name" />
                  </div>
                  <div className="form-group p-2">
                    <label for="productPrice">Product Price:</label>
                    <input type="number" className="form-control" id="productPrice" placeholder="Enter product price" />
                  </div>
                  <div className="form-group p-2">
                    <label for="productImage">Product Image:</label>
                    <input type="file" className="form-control" id="productImage" />
                  </div>
                  <button type="submit" className="btn btn-primary p-2">Add Product</button>
                </form>
            </div>
        </div>
      </div>
    </>
  )
}
