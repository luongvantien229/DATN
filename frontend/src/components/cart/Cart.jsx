import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQ,
  incrementQ,
  removeFromCart,
} from "../../redux/slices/cartSlice";
import Stripe from "../payments/stripe";

export default function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const total = cartItems.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );
  return (
    <div className=" row my-4">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={item.id}>
                    <td>{(index += 1)}</td>
                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="fluid rounded"
                        width={60}
                        height={60}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>
                      <i
                        className="bi bi-caret-up"
                        onClick={() => dispatch(incrementQ(item))}
                      ></i>
                      <span className="mx-2">{item.quantity}</span>
                      <i
                        className="bi bi-caret-down"
                        onClick={() => dispatch(decrementQ(item))}
                      ></i>
                    </td>
                    <td>{item.price} VNĐ</td>
                    <td>{item.price * item.quantity} VNĐ</td>
                    <td>
                      {" "}
                      <i
                        className="bi bi-cart-x"
                        onClick={() => dispatch(removeFromCart(item))}
                      ></i>
                    </td>
                  </tr>
                ))}
                <tr>
                  <th colSpan={3} className="text-center">
                    Total
                  </th>
                  <th colSpan={3} className="text-center">
                    <span className="badge bg-danger rounded-pill">
                      {total}VNĐ
                    </span>
                  </th>
                </tr>
              </tbody>
            </table>
            {
              total > 0 && <Stripe/>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
