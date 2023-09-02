import React from "react";
import "../styles/ProductsResults.scss";

import ProductItem from "./ProductItem";

const ProductsResult = ({ products }) => {
  return (
    <>
      {products.length <= 0 ? (
        <div className="no_results">No Results Found !!!</div>
      ) : (
        <div className="product_results_container">
          {products.map((product, i) => {
            return <ProductItem key={i} product={product} />;
          })}
        </div>
      )}
    </>
  );
};

export default ProductsResult;
