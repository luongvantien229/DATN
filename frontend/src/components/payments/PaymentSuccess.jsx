import React from 'react'
import { useParams } from 'react-router-dom';

export default function PaymentSuccess() {
    const { orderId } = useParams();
    return (
        <div className="row my-4">
            <div className="col-md-6 mx-auto">
                <div className="card">
                    <div className="card-body">
                        <h4 className="text-center">
                            Payment done successfully thank you.
                            <p>Thank you for your order!</p>
      <p>Your Order ID is: {orderId}</p>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}