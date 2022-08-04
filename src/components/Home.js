import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <div className="py-10">
        <div className="container flex mx-auto justify-between items-center">
          <div className="w-1/2">
            <h6 className="text-lg">
              <em>Are you hungry?</em>
            </h6>
            <h1 className="text-3xl font-bold">Don't wait!</h1>
            <button className="rounded-full bg-yellow-500 px-5 py-2 mt-2 hover:bg-yellow-600">
              Order Now
            </button>
          </div>
          <div className="w-1/2">
            <img className="w-4/5" src="images/pizza.png" alt="pizza" />.
          </div>
        </div>
      </div>
      <div>
        <Products />
      </div>
    </>
  );
};

export default Home;
