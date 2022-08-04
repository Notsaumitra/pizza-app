import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://ecom-rest-apis.herokuapp.com/api/products/${params.id}`)
      .then((res) => res.json())
      .then((prod) => {
        console.log(prod);
        setProduct(prod);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <h1>loading</h1>;
  }
  return (
    <>
      <div className="ml-80 mb-10">
        <button
          className=" bg-yellow-500 py-1 px-3 rounded-full font-bold mt-20"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
      <div className="container-full mx-auto flex shadow-lg mb-20 pb-20">
        <div className="w-2/6"></div>
        <div className="w-1/6 flex justify-end shadow-lg">
          <img src={product.image} alt="sm-pizza" />
        </div>
        <div className="w-1/6 text-center bg-red-100 pt-10 shadow-lg">
          <div className=" pb-5">
            <h2 className="text-lg font-bold py-2">{product.name}</h2>
            <span className="bg-gray-200 py-1 rounded-full px-4">
              {product.size}
            </span>
          </div>
          <div>
            <span>{"₹ " + product.price}</span>
            <br />
            <button className="bg-yellow-500 py-1 px-3 rounded-full font-bold">
              ADD
            </button>
          </div>
        </div>
        <div className="w-1/6"></div>
      </div>
    </>
  );
};

export default SingleProduct;
