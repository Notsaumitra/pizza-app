import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://ecom-rest-apis.herokuapp.com/api/products")
      .then((res) => {
        return res.json();
      })
      .then((products) => {
        console.log(products);
        setProducts(products);
      });
  }, []);
  return (
    <div className="container mx-auto pb-25 mb-20">
      <div>
        <h1 className="text-lg font-bold my-8">Product</h1>
        <div className="grid grid-cols-5 my-8 gap-24">
          {product.map((item) => (
            <Product
              key={item._id}
              name={item.name}
              size={item.size}
              image={item.image}
              price={item.price}
              _id={item._id}
            />
          ))}
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Products;
