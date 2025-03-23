// eslint-disable-next-line no-unused-vars
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ element }) => {
  const cartItems = useSelector((state) => state.cart.cart);
  return cartItems.length > 0 ? element : <Navigate to="/" />;
};

ProtectedRoute.propTypes = {
  element: PropTypes.node.isRequired, // Ensure element is a valid React node
};

export default ProtectedRoute;
