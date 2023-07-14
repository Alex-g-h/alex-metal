import React from "react";

const Product = ({ key, text, img }) => {
  return (
    <div className="product">
      <img
        className="product__img"
        key={key}
        src={img}
        alt=""
      />
      <div className="product__text">{text}</div>
    </div>
  );
};

export default Product;
