import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

export default function ProductListItem({ product }) { 
  const dispatch = useDispatch()
    return (
    <div className="col-md-4 mb-2">
      <div className="card h-100">
        <img src={product.image} alt={product.name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p>
            <span className="fw-bold text-danger">{product.price} VNĐ</span>
          </p>
          <button className="btn btn-dark" onClick={()=>dispatch(addToCart(product))}>
            <i className="bi bi-cart-check"></i> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
