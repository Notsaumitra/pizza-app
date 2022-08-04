import React from "react";
import { Link } from "react-router-dom";

const Product = ({ name, image, price, size, _id }) => {
  //   console.log(product);
  //   const { name, price, image, size } = product;
  return (
    <Link to={`/products/${_id}`}>
      <div>
        <img src={image} alt="sm-pizza" />
        <div className="text-center">
          <h2 className="text-lg font-bold py-2">{name}</h2>
          <span className="bg-gray-200 py-1 rounded-full px-4">{size}</span>
        </div>
        <div className="flex justify-between">
          <span>{"₹ " + price}</span>
          <button className="bg-yellow-500 py-1 px-3 rounded-full font-bold">
            ADD
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Product;
