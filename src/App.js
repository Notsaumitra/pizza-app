import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import PageNotFound from "./components/PageNotFound";
import About from "./components/About";
import SingleProduct from "./components/SingleProduct";
import Footer from "./components/Footer";
import { createContext } from "react";
import UseReducerUseContextRoot from "./components/UseReducerUseContextRoot";

const FirstName = createContext();
const LastName = createContext();
function App() {
  return (
    <>
      <BrowserRouter>
        <FirstName.Provider value={"saumitra"}>
          <LastName.Provider value={"pandey"}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />}>
                <Route path="products/about" element={<About />}></Route>
              </Route>
              <Route path="/cart" element={<Cart />} />
              <Route path="/products/:id" element={<SingleProduct />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <About />
            <UseReducerUseContextRoot />
            <Footer />
          </LastName.Provider>
        </FirstName.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
export { FirstName, LastName };
