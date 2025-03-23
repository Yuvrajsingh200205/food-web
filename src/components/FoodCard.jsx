// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({ id, name, price, desc, img, rating, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2">
      <img
        src={img}
        alt={name}
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      />
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-green-500 ">₹{price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between">
        <span className="flex justify-center items-center">
          <AiFillStar className="mr-1 text-yellow-400" /> {rating}
        </span>
        <button
          onClick={() => {
            dispatch(
              addToCart({ id, name, price, rating, img, qty: 1 })
            );
            handleToast(name);
          }}
          className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

// ✅ Define PropTypes to fix the ESLint warning
FoodCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Assuming ID can be string or number
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired, // Ensure price is a number
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired, // Assuming img is a URL (string)
  rating: PropTypes.number.isRequired, // Ensure rating is a number
  handleToast: PropTypes.func.isRequired, // Function prop
};

export default FoodCard;
