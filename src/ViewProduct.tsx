import React from "react";

const ViewProduct = ({ product }) => {
  // console.log(product);

  return (
    <div className="product_single">
      <p >{product.title}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default ViewProduct;
