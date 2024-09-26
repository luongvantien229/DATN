import { Link } from "react-router-dom";
import CartItem from "./CartItem";

export default function CartTableContent() {
  return (
    <div className="row">
                    <div className="col-12">
                        <form action="#">
                            <div className="cart-table-content">
                                <div className="table-content table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="width-thumbnail">Product</th>
                                                <th className="width-name"></th>
                                                <th className="width-price"> Price</th>
                                                <th className="width-quantity">Quantity</th>
                                                <th className="width-subtotal">Subtotal</th>
                                                <th className="width-remove"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {[...Array(3)].map((_, index) => (
                                            <CartItem key={index} />
                                        ))}                                 
                                        </tbody>
                                    </table>
                                </div>
                                <div className="cart-shiping-update-wrapper">
                                    <div className="continure-clear-btn">
                                        <div className="continure-btn">
                                            <a href="#">Continue shopping</a>
                                        </div>
                                        <div className="clear-btn">
                                            <a href="#"><i className="fal fa-times"></i> Clear shopping cart</a>
                                        </div>
                                    </div>
                                    <div className="update-btn">
                                        <a href='cart.html'>Update cart</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
  );
}
