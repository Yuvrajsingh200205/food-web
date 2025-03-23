// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white mb-3 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50 shadow-lg`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((food) => (
            <ItemCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              img={food.img}
              qty={food.qty}
            />
          ))
        ) : (
          <h2 className="text-center text-xl font-bold text-gray-800">
            Your cart is empty
          </h2>
        )}

        <div className="absolute bottom-0 w-full p-4 bg-white shadow-md">
          <h3 className="font-semibold text-gray-800">Items: {totalQty}</h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount: ₹{totalPrice}
          </h3>
          <hr className="my-2" />
          <button
            onClick={() => navigate("/success")}
            className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-full"
          >
            Checkout
          </button>
        </div>
      </div>

      {/* Cart Icon with Bounce Effect When Items are Added */}
      <div
        onClick={() => setActiveCart(!activeCart)}
        className={`fixed bottom-4 right-4 bg-white shadow-lg rounded-full w-16 h-16 flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-xl ${
          totalQty > 0 ? "animate-bounce" : ""
        }`}
      >
        <FaShoppingCart className="text-black-500 text-3xl" />
      </div>
    </>
  );
};

export default Cart;
